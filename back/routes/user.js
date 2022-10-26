const express = require("express");
const bcrypt = require("bcrypt");
const { User, Post } = require("../models"); // db 내에서 User, Post 테이블을 가져온 것.
const passport = require("passport");

const router = express.Router();

// 로그인중인 상태인지 확인하는 라우터
router.get("/", async (req, res, next) => {
  // Get /user
  // console.log(req.headers);
  try {
    if (req.user) {
      // req.user 는 passport로 인해 로그인을 한 상태이면 상시 유지되므로 불러와진다면 로그인이 된 상태인 것이다.
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
            attributes: ["id"], // 서버로부터 프론트엔드에 필요한 데이터만 보내주는 것.
            // 게시글 id만 가져온다.
          },
        ],
      });
      return res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 회원가입 요청 처리하는 라우터
router.post("/", async (req, res, next) => {
  // POST /user || next를 넣으면 발생한 에러를 한방에 브라우저로 모아준다.
  try {
    console.log(`req.body : ${JSON.stringify(req.body)}`);

    const exUser = await User.findOne({
      where: {
        userId: req.body.userId,
      },
    });

    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다.");
      // 여기서 보내는 res에 대한 send 메시지는 sagas/user.js의 signup 부분 err.response.data 가 된다!
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await User.create({
      //! User 테이블 내에 post, 즉 생성을 요청한다. 또한 async await을 사용함으로써 비동기처리를 해주고 순서대로 처리될 수 있도록 해준다.
      userId: req.body.userId,
      nickname: req.body.nickname,
      password: hashedPassword,
    });

    res.status(200).send("ok");
  } catch (error) {
    console.error(error);
    next(error); // status 500 -> 서버쪽 에러라는 뜻
  }
});

// 로그인 요청하는 라우터
// POST /user/login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      console.log("test");
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
          },
        ],
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

// 로그아웃 요청
router.post("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("ok");
});

module.exports = router;
