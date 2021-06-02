import React from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import "antd/dist/antd.css";
import styled from "styled-components";

import NavBar from "./NavBar";
import UserProfile from "./UserProfile";
import TodoListCut from "./TodoListCut";

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

const AppLayout = ({ children }) => {
  return (
    <Row>
      <MainCol>
        <NavBar />
        <div>{children}</div>
      </MainCol>
      <SubCol>
        <UserProfile />
        <TodoWrapper>
          <TodoListCut />
        </TodoWrapper>
      </SubCol>
    </Row>
  );
};

export default AppLayout;
