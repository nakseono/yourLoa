import React from "react";
import styled from "styled-components";

import "./App.css";

const ComponentWrapper = styled.div`
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
