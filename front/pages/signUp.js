import React, { useState, useCallback, useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Result } from "antd";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import AppLayout from "../components/AppLayout";
import SignUpSuccess from "../components/SignUpSuccess";
import { SIGN_UP_REQUEST } from "../reducers/user";

const SignUpForm = styled(Form)`
  width: 300px;
  /* max-width: 350px; */
`;

const SignUpFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  .ant-form-item {
    margin-bottom: 20px;
  }
`;

const SignUp = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError } = useSelector(
    (state) => state.user
  );

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  const onChangeUserId = useCallback(
    (e) => {
      setUserId(e.target.value);
    },
    [userId]
  );

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [password]
  );

  const onChangeNickNname = useCallback(
    (e) => {
      setNickname(e.target.value);
    },
    [nickname]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordCheck(false);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(userId, nickname, password);
    console.log(`signup submit`);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { userId, nickname, password },
    });
  }, [userId, nickname, password, passwordCheck, term]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  return (
    <AppLayout>
      {signUpDone ? (
        <SignUpSuccess />
      ) : (
        <SignUpFormWrapper>
          <SignUpForm
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onSubmit}
          >
            <Form.Item
              name="userId"
              rules={[
                {
                  required: true,
                  message: "ID를 입력해주세요!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="사용하실 아이디를 입력해주세요."
                onChange={onChangeUserId}
              />
            </Form.Item>
            <Form.Item
              name="nickname"
              rules={[
                {
                  required: true,
                  message: "닉네임을 입력해주세요!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="보여질 닉네임을 입력해주세요."
                onChange={onChangeNickNname}
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
                placeholder="사용하실 비밀번호를 입력해주세요."
                onChange={onChangePassword}
              />
            </Form.Item>
            <Form.Item
              name="passwordCheck"
              rules={[
                {
                  required: true,
                  message: "비밀번호를 재입력해주세요!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="확인을 위해 비밀번호를 재입력해주세요."
                onChange={onChangePasswordCheck}
              />
            </Form.Item>
            <Form.Item>
              <Checkbox onChange={onChangeTerm}>
                YourLoa 이용약관에 동의합니다.
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: "100%" }}
                loading={signUpLoading}
              >
                회원가입
              </Button>
            </Form.Item>
          </SignUpForm>
        </SignUpFormWrapper>
      )}
    </AppLayout>
  );
};
export default SignUp;
