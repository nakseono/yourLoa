import React from "react";
import { Col, Collapse, Row } from "antd";
import Link from "next/link";
import "antd/dist/antd.css";
import styled from "styled-components";

import NavBar from "./NavBar";
import UserProfile from "./UserProfile";
import TodoListCut from "./TodoListCut";

const MainCol = styled(Col)`
  width: 950px;
  padding: 0px 5px;
`;

const SubCol = styled(Col)`
  width: 340px;
  background-color: gray;
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
        <TodoListCut />
      </SubCol>
    </Row>
  );
};

export default AppLayout;
