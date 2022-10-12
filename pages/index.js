import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import { Input, Avatar, List, Col, Row } from "antd";
import styled from "styled-components";
import Notice from "../components/mainPages/Notice";

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
  background-color: #325432;
`

const Home = () => {
  return (
    <AppLayout>
      <LogoSpace>YOUR LOA LOGO</LogoSpace>
      <UserSearchInput placeholder="검색할 캐릭터 이름을 입력하세요." enterButton />
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
