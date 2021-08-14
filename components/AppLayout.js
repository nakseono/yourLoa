import React, { useCallback, useState } from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import "antd/dist/antd.css";
import styled from "styled-components";

import NavBar from "./NavBar";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import TodoListCut from "./TodoListCut";

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  margin-bottom: 0.5em;
`;

const MainCol = styled(Col)`
  width: 950px;
  padding: 0px 20px;
`;

const SubCol = styled(Col)`
  width: 340px;
`;

const TodoWrapper = styled(Col)`
  height: 230px;
`;

const CopyRight = styled.div`
  float: right;
  margin-right: 3rem;
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <Title>yourLoa</Title>
      <Row>
        <MainCol>
          <NavBar />
          <div>{children}</div>
        </MainCol>
        <SubCol>
          {/* <UserProfile /> */}
          <LoginForm />
          <TodoWrapper>
            <TodoListCut />
          </TodoWrapper>
        </SubCol>
      </Row>
      <CopyRight>made by nakseono & sprumin @ 2021</CopyRight>
    </>
  );
};

export default AppLayout;
