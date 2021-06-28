import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import "antd/dist/antd.css";
import styled from "styled-components";

const MenuItemWrapper = styled(Menu.Item)`
  margin-left: 35px;
  margin-right: 35px;
`;

const NavBar = () => {
  return (
    <div style={{ borderBottom: "solid 0.5px" }}>
      <Menu
        mode="horizontal"
        style={{
          textAlign: "center",
          margin: "auto",
        }}
      >
        <MenuItemWrapper>
          <Link href="/">
            <a>메인 페이지</a>
          </Link>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <Link href="/Barrack">
            <a>배럭 Todo</a>
          </Link>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <Link href="/Guide">
            <a>육성 | 클래스별 공략</a>
          </Link>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <Link href="/Mokoko">
            <a>내실 정보</a>
          </Link>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <Link href="/Tip">
            <a>꿀팁 | 공략</a>
          </Link>
        </MenuItemWrapper>
      </Menu>
    </div>
  );
};

export default NavBar;
