const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const { User } = require("../models");
const bcrypt = require("bcrypt");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          //! 우선 userId 가 존재하는지 확인
          const user = await User.findOne({
            where: {
              userId: email,
            },
          });

          //! 만약 userId부터가 없다면 실패 반환
          if (!user) {
            return done(null, false, { reason: "존재하지 않는 ID입니다." });
          }

          //! ID를 기준으로 DB에 요청했을 때 받아오는게 있었다면 user = 로그인 할 유저의 정보
          //! 이제 비밀번호와 대조할 차례이다.
          const result = await bcrypt.compare(password, user.password);

          //! 비밀번호 대조까지 괜찮다면 user 정보를 반환.
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: "비밀번호가 틀렸습니다." }); //! 아니라면 실패처리.
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
