import React, { useState, useCallback } from "react";
import AppLayout from "../components/AppLayout";
import { Input, Col, Row } from "antd";
import styled from "styled-components";
import Notice from "../components/Notice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const UserSearchInput = styled(Input.Search)`
  display: flex;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 80px;
  width: 550px;
`;

const LogoSpace = styled.div`
  display: flex;
  margin: auto;
  height: 170px;
  width: 425px;
  background-color: #ffc8c8;
`;

const Home = () => {
  const [nickname, setNickname] = useState("");
  const router = useRouter();

  const onChangeNickname = useCallback(
    (e) => {
      setNickname(e.target.value);
    },
    [nickname]
  );

  const onSearchForm = useCallback(() => {
    if (nickname === "") {
      return alert("검색할 닉네임을 정확히 입력해주세요!");
    }

    console.log(`onSearchForm 함수 실행, ${nickname} 유저 검색 페이지로 이동`);
    router.push(`/searchUser/${nickname}`);
  }, [nickname]);

  return (
    <AppLayout>
      <LogoSpace>YOUR LOA LOGO</LogoSpace>

      <UserSearchInput
        size="large"
        value={nickname}
        onChange={onChangeNickname}
        placeholder="검색할 캐릭터 이름을 입력하세요."
        onSearch={onSearchForm}
        enterButton
      />

      <Row>
        <Col span={12}>
          <Notice />
        </Col>
        <Col span={12}>
          <Notice />
        </Col>
      </Row>
    </AppLayout>
  );
};

export default Home;
