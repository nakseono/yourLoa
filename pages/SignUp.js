import React, { useState } from "react";
import { Card, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import styled from "styled-components";

const SignUpPage = styled.div`
  width: 700px;
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

const SignUp = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <SignUpPage>
      <>
        <Link href="/">
          <div>돌아가기</div>
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
          {/* 아이디 관련 */}
          <div>아이디</div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
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
              />
            </Form.Item>
            {/* 비밀번호 관련 */}
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
              />
            </Form.Item>{" "}
            {/* 비밀번호 확인 관련 */}
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
              />
            </Form.Item>
            <Form.Item style={{ marginBottom: "0" }}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: "100%" }}
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
