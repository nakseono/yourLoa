import { Layout, Menu, Button } from "antd";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

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

const AppLayout = ({ children }) => (
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
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="first">
          <Link href="/">
            <a>캐릭터 검색</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="second">
          <Link href="/squadMaker">
            <a>스쿼드 메이커</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="third">
          <Link href="/auction">
            <a>경매 분배금 계산기</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="four">
          <Link href="/board">
            <a>자유게시판</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content
      className="site-layout"
      style={{
        padding: "20px 50px",
        marginTop: 64,
        minHeight: 600,
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

export default AppLayout;
