import React from "react";
import styled from "styled-components";
import { Divider } from "antd";

import AppLayout from "../components/AppLayout.js";

const BannerWrapper = styled.div`
  /* width: 900px; */
  height: 7em;
  border: solid 1px;
  margin-bottom: 1em;
  //! side
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InLayoutContent = styled.div`
  padding: 1em;
`;

const DividerWrapper = styled(Divider)`
  margin-top: 2em !important;
`;

const Main = () => {
  return (
    <AppLayout>
      <InLayoutContent>
        <Divider>이벤트 알림</Divider>
        <BannerWrapper>놓치지 말아야 할 이벤트 배너</BannerWrapper>
        <DividerWrapper>꿀팁 추천!</DividerWrapper>
        <BannerWrapper>꿀팁 배너</BannerWrapper>
      </InLayoutContent>
    </AppLayout>
  );
};

export default Main;
