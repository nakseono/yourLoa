import React, { useCallback, useState } from "react";
import { Card, Menu } from "antd";
import styled from "styled-components";

import Berserker from "./Berserker";
import Destroyer from "./Destroyer";
import Holyknight from "./Holyknight";
import Warlord from "./Warlord";

const WarriorPage = () => {
  const [isBerserker, setBerserkerState] = useState(false);
  const [isDestroyer, setDestroyerState] = useState(false);
  const [isHolyknight, setHolyknightState] = useState(false);
  const [isWarlord, setWarlordState] = useState(false);

  const clearState = useCallback(() => {
    setBerserkerState(false);
    setDestroyerState(false);
    setHolyknightState(false);
    setWarlordState(false);
  }, []);

  const clickBerserker = () => {
    clearState();
    setBerserkerState(true);
  };
  const clickDestroyer = () => {
    clearState();
    setDestroyerState(true);
  };
  const clickHolyknight = () => {
    clearState();
    setHolyknightState(true);
  };
  const clickWarlord = () => {
    clearState();
    setWarlordState(true);
  };

  const CardWrapper = styled(Card)`
    border: 0.5px solid;
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
      {isBerserker ? <Berserker /> : <></>}
      {isDestroyer ? <Destroyer /> : <></>}
      {isHolyknight ? <Holyknight /> : <></>}
      {isWarlord ? <Warlord /> : <></>}
    </>
  );
};

export default WarriorPage;
