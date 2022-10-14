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

const AppLayout = ({ children }) => {
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
