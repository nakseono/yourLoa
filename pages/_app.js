import React from "react";
import styled from "styled-components";

const ComponentWrapper = styled.div`
  padding: 20px 30px;
`;

const App = ({ Component }) => {
  return (
    // <ComponentWrapper>
    <Component styled={{ padding: "20px 30px" }} />
    // </ComponentWrapper>
  );
};

export default App;
