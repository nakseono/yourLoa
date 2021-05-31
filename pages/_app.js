import React from "react";
import styled from "styled-components";

const ComponentWrapper = styled.div`
  width: 1400px;
  padding: 20px 30px;
  margin: auto;
`;

const App = ({ Component }) => {
  return (
    <ComponentWrapper>
      <Component />
    </ComponentWrapper>
  );
};

export default App;
