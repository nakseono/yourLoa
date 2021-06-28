import React from "react";
import styled from "styled-components";

import AppLayout from "../components/AppLayout.js";

const BannerWrapper = styled.div`
  width: 900px;
  height: 200px;
  border: solid 1px;
`;

const InLayoutContent = styled.div`
  padding: 10px;
`;

const Main = () => {
  return (
    <AppLayout>
      <InLayoutContent>
        <BannerWrapper></BannerWrapper>
      </InLayoutContent>
    </AppLayout>
  );
};

export default Main;
