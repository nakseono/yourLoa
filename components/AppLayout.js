import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HeaderNavigation = () => {
  return (
    <>
      <div>캐릭터 검색</div>
      <div>스쿼드 메이커</div>
      <div>경매 분배금 계산</div>
      <div>자유게시판</div>
    </>
  );
};

const FooterCopyRight = () => {
  return (
    <>
      <div>©made by nakseono</div>
      <div>github.com/nakseono</div>
    </>
  );
};

const AppLayout = ({ children }) => {
  return (
    <div>
      <HeaderNavigation />
      <div>{children}</div>
      <FooterCopyRight />
    </div>
  );
};

export default AppLayout;
