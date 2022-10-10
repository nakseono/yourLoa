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

const Home = () => {
  return (
    <AppLayout>
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
