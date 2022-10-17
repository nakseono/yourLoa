import { Avatar, Layout, Menu, Button, Dropdown, Popover } from "antd";
import React, { useCallback } from "react";
import Link from "next/link";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { LOG_OUT_REQUEST } from "../reducers/user";

const { Header, Content, Footer } = Layout;

// .site-layout .site-layout-background {
//   background: #fff;
// }

const Logo = styled.div`
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.2);
`;

const LoginSpace = styled.div`
  position: absolute;
  right: 20px;
  top: -1px;
`;

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { logInUserInfo } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  const LoginMenu = (
    <Menu
      items={[
        {
          label: "내 정보",
          key: "0",
        },
        {
          label: "2nd menu item",
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: "로그아웃",
          key: "logout",
          onClick: onLogOut,
        },
      ]}
    />
  );

  const items = [
    {
      label: (
        <Link href="/">
          <a>캐릭터 검색</a>
        </Link>
      ),
      key: "home",
    },
    {
      label: (
        <Link href="/squadMaker">
          <a>스쿼드 메이커</a>
        </Link>
      ),
      key: "squadMaker",
    },
    {
      label: (
        <Link href="/auction">
          <a>경매 분배금 계산기</a>
        </Link>
      ),
      key: "auction",
    },
    {
      label: (
        <Link href="/board">
          <a>자유게시판</a>
        </Link>
      ),
      key: "board",
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <Menu theme="dark" mode="horizontal" items={items} />
        <LoginSpace>
          {logInUserInfo ? (
            <Dropdown
              overlay={LoginMenu}
              trigger={["click"]}
              overlayStyle={{ paddingTop: "30px" }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Avatar shape="square" size="large" icon={<UserOutlined />} />
              </a>
            </Dropdown>
          ) : (
            <Button type="primary">
              <Link href="/login" replace>
                <a>로그인</a>
              </Link>
            </Button>
          )}
        </LoginSpace>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "35px 100px",
          marginTop: 64,
          minHeight: 800,
        }}
      >
        {children}
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div>
          YourLoa ©made by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nakseono"
          >
            nakseono
          </a>
          <br />
          contact : nakseono@gmail.com
        </div>
      </Footer>
    </Layout>
  );
};

export default AppLayout;
