import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import "antd/dist/antd.css";
import styled from "styled-components";

const MenuWrapper = styled(Menu)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuItemWrapper = styled(Menu.Item)`
  padding-left: 3rem !important;
  padding-right: 3rem !important;
`;

/* pointer-events: none; */
/* cursor: default; */

const NavBar = () => {
  return (
    <div style={{ borderBottom: "solid 0.5px" }}>
      <MenuWrapper mode="horizontal">
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
      </MenuWrapper>
    </div>
  );
};

export default NavBar;
