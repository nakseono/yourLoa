import React, { useState, useCallback, useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import AppLayout from "../components/AppLayout";
import { LOG_IN_REQUEST } from "../reducers/user";

const LoginForm = styled(Form)`
  width: 300px;
  /* max-width: 350px; */
`;

const LoginFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  .ant-form-item {
    margin-bottom: 20px;
  }
`;

const Login = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback(
    (e) => {
      setId(e.target.value);
    },
    [id]
  );

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [password]
  );

  const onSubmit = useCallback(() => {
    console.log(`login request dispatch`);
    dispatch({
      type: LOG_IN_REQUEST,
      data: { userId: id, userPw: password },
    });
  }, [id, password]);

  const { logInLoading, logInError } = useSelector((state) => state.user);

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  return (
    <AppLayout>
      <LoginFormWrapper>
        <LoginForm
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onSubmit}
        >
          <Form.Item
            name="id"
            rules={[
              {
                required: true,
                message: "ID를 입력해주세요!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="ID"
              onChange={onChangeId}
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
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onChange={onChangePassword}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>자동 로그인</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="" style={{ float: "right" }}>
              비밀번호 찾기
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%" }}
            >
              로그인
            </Button>
            Or <a href="">회원가입</a>
          </Form.Item>
        </LoginForm>
      </LoginFormWrapper>
    </AppLayout>
  );
};
export default Login;