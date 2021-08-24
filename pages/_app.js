import React from "react";
import styled from "styled-components";
import { CookiesProvider } from "react-cookie";

import "./App.css";

const ComponentWrapper = styled(CookiesProvider)`
  width: 1400px;
  padding: 20px 30px;
  margin: auto;
  margin-top: 20px;
`;

const App = ({ Component }) => {
  return (
    <ComponentWrapper>
      <Component />
    </ComponentWrapper>
  );
};

export default App;
