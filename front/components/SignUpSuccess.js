import React, { useCallback } from "react";
import { Button, Result } from "antd";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { SIGN_UP_SUCCESS_AFTER } from "../reducers/user";

const SignUpSuccess = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onClickToMain = useCallback(() => {
    router.push("/");
  }, []);

  const onClickToLogin = useCallback(() => {
    router.push("/login");
  }, []);

  return (
    <Result
      status="success"
      title="회원가입이 성공적으로 처리되었습니다!"
      subTitle="메인화면으로 돌아가시거나, 바로 로그인하러 가실 수 있어요!"
      extra={[
        <Button key="toMain" onClick={onClickToMain}>
          메인화면으로
        </Button>,
        <Button type="primary" key="toLogin" onClick={onClickToLogin}>
          로그인하기
        </Button>,
      ]}
    />
  );
};

export default SignUpSuccess;
