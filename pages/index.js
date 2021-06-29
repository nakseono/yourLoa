import React from "react";
import styled from "styled-components";

import AppLayout from "../components/AppLayout.js";

const BannerWrapper = styled.div`
  /* width: 900px; */
  height: 7em;
  border: solid 1px;
  margin-bottom: 1em;
`;

const InLayoutContent = styled.div`
  padding: 1em;
`;

const Main = () => {
  return (
    <AppLayout>
      <InLayoutContent>
        <BannerWrapper>놓치지 말아야 할 이벤트 배너</BannerWrapper>
        <BannerWrapper>놓치지 말아야 할 이벤트 배너</BannerWrapper>
        <BannerWrapper>꿀팁 배너</BannerWrapper>
        <BannerWrapper>꿀팁 배너</BannerWrapper>
      </InLayoutContent>
    </AppLayout>
  );
};

export default Main;
