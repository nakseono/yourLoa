import React from "react";
import { Card, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import styled from "styled-components";

const CardAct = styled.a`
  color: black !important;
`;

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Card
      actions={[
        <Link href="/FindPassword">
          <CardAct>비밀번호 찾기</CardAct>
        </Link>,
        <Link href="/SignUp">
          <CardAct>회원가입</CardAct>
        </Link>,
      ]}
    >
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
          style={{ marginBottom: "10px" }}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="ID"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해주세요!",
            },
          ]}
          style={{ marginBottom: "5px" }}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          style={{ marginBottom: "15px" }}
        >
          <Checkbox>로그인 유지</Checkbox>
        </Form.Item>

        <Form.Item style={{ marginBottom: "0" }}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
          >
            로그인
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginForm;
