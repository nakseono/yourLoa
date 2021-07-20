import React, { useCallback, useState } from "react";
import { Card } from "antd";
import styled from "styled-components";

import Berserker from "./Berserker";
import Destroyer from "./Destroyer";
import Holyknight from "./Holyknight";
import Warlord from "./Warlord";

const WarriorPage = () => {
  const [isBerserker, setBerserkerPage] = useState(false);
  const [isDestroyer, setDestroyerPage] = useState(false);
  const [isHolyknight, setHolyknightPage] = useState(false);
  const [isWarlord, setWarlordPage] = useState(false);

  const clearState = useCallback(() => {
    setBerserkerPage(false);
    setDestroyerPage(false);
    setHolyknightPage(false);
    setWarlordPage(false);
  }, []);

  const clickBerserker = () => {
    clearState();
    setBerserkerPage(true);
  };
  const clickDestroyer = () => {
    clearState();
    setDestroyerPage(true);
  };
  const clickHolyknight = () => {
    clearState();
    setHolyknightPage(true);
  };
  const clickWarlord = () => {
    clearState();
    setWarlordPage(true);
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
        title="전사"
        headStyle={{ display: "flex", justifyContent: "center" }}
        size="small"
      >
        <Card.Grid
          style={{
            width: "25%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickBerserker}
        >
          <div>버서커</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "25%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickDestroyer}
        >
          <div>디스트로이어</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "25%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickHolyknight}
        >
          <div>홀리나이트</div>
        </Card.Grid>
        <Card.Grid
          style={{ width: "25%", justifyContent: "center", display: "flex" }}
          onClick={clickWarlord}
        >
          <div>워로드</div>
        </Card.Grid>
      </CardWrapper>
      <ClassWrapper>
        {isBerserker ? <Berserker /> : <></>}
        {isDestroyer ? <Destroyer /> : <></>}
        {isHolyknight ? <Holyknight /> : <></>}
        {isWarlord ? <Warlord /> : <></>}
      </ClassWrapper>
    </>
  );
};

export default WarriorPage;
