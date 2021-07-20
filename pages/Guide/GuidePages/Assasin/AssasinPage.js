import React, { useCallback, useState } from "react";
import { Card } from "antd";
import styled from "styled-components";

import Blade from "./Blade";
import Demonic from "./Demonic";
import Reaper from "./Reaper";

const AssasinPage = () => {
  const [isBlade, setBladePage] = useState(false);
  const [isDemonic, setDemonicPage] = useState(false);
  const [isReaper, setReaperPage] = useState(false);

  const clearState = useCallback(() => {
    setBladePage(false);
    setDemonicPage(false);
    setReaperPage(false);
  }, []);

  const clickBlade = () => {
    clearState();
    setBladePage(true);
  };
  const clickDemonic = () => {
    clearState();
    setDemonicPage(true);
  };
  const clickReaper = () => {
    clearState();
    setReaperPage(true);
  };

  const CardWrapper = styled(Card)`
    border: 0.5px solid;
    margin-top: 1rem;
  `;

  const ClassWrapper = styled.div`
    margin-top: 1rem;
  `;

  return (
    <>
      <CardWrapper
        title="암살자"
        headStyle={{ display: "flex", justifyContent: "center" }}
        size="small"
      >
        <Card.Grid
          style={{
            width: "33.33%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickBlade}
        >
          <div>블레이드</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "33.33%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickDemonic}
        >
          <div>데모닉</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "33.33%",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickReaper}
        >
          <div>리퍼</div>
        </Card.Grid>
      </CardWrapper>
      <ClassWrapper>
        {isBlade ? <Blade /> : <></>}
        {isDemonic ? <Demonic /> : <></>}
        {isReaper ? <Reaper /> : <></>}
      </ClassWrapper>
    </>
  );
};

export default AssasinPage;
