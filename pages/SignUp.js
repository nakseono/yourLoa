import React, { useState } from "react";
import { Card, Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import styled from "styled-components";
import axios from "axios";

const SignUpPage = styled.div`
  width: 650px;
  margin: auto;
`;

const CardAct = styled.a`
  color: black !important;
`;

const SignUpTitle = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const BackMent = styled.div`
  border: solid 0.5px;
`;

const SignUp = () => {
  const [id, setId] = useState("");
  const [nick, setNick] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");

  const signUpPost = () => {
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/account/register/",
      data: {
        username: id,
        password1: pwd,
        password2: pwdCheck,
      },
    })
      .then((res) => {
        if (res.status === 201) {
          console.log("로그인 성공");
        }
      })
      .catch((error) => {
        console.log("error : " + JSON.stringify(error));
      });
  };

  return (
    <SignUpPage>
      <>
        <Link href="/">
          <ArrowLeftOutlined />
        </Link>
        <SignUpTitle>
          <div>YourLoa 회원가입</div>
        </SignUpTitle>
        <Card
          actions={[
            <Link href="/">
              <CardAct>메인화면으로 돌아가기</CardAct>
            </Link>,
          ]}
        >
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
          >
            {/* ---------- 닉네임 관련 ---------- */}
            <div>닉네임</div>
            <Form.Item
              name="nickname"
              rules={[
                {
                  required: true,
                  message: "닉네임을 입력해주세요!",
                },
              ]}
              style={{ marginBottom: "30px" }}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="닉네임을 입력해주세요."
                onChange={(e) => {
                  setNick(e.target.value);
                }}
              />
            </Form.Item>
            {/* ---------- 아이디 관련 ---------- */}
            <div>ID</div>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "아이디를 입력해주세요!",
                },
              ]}
              style={{ marginBottom: "30px" }}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="아이디를 입력해주세요."
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
            </Form.Item>
            {/* ---------- 비밀번호 관련 ---------- */}
            <div>비밀번호</div>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "비밀번호를 입력해주세요!",
                },
              ]}
              style={{ marginBottom: "30px" }}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
              />
            </Form.Item>{" "}
            {/* ---------- 비밀번호 확인 관련 ---------- */}
            <div>비밀번호 확인</div>
            <Form.Item
              name="passwordCheck"
              rules={[
                {
                  required: true,
                  message: "비밀번호가 다릅니다!",
                },
              ]}
              style={{ marginBottom: "30px" }}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="비밀번호를 확인해주세요."
                onChange={(e) => {
                  setPwdCheck(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item style={{ marginBottom: "0" }}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: "100%" }}
                onClick={signUpPost}
              >
                회원가입
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </>
    </SignUpPage>
  );
};

export default SignUp;
