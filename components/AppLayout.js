import React from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import "antd/dist/antd.css";
import styled from "styled-components";

import NavBar from "./NavBar";
import UserProfile from "./UserProfile";
import TodoListCut from "./TodoListCut";

const AppLayout = ({ children }) => {
  return (
    <Row>
      <Col
        style={{
          width: "950px",
          paddingLeft: "5px",
          paddingRight: "5px",
          // backgroundColor: "gray",
        }}
      >
        <NavBar />
        <div>{children}</div>
      </Col>
      <Col>
        <UserProfile />
        <TodoListCut />
      </Col>
    </Row>
  );
};

export default AppLayout;
