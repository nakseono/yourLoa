import React, { useCallback, useState } from "react";
import { Card } from "antd";
import styled from "styled-components";

import BattleMaster from "./BattleMaster";
import Infighter from "./Infighter";
import LanceMaster from "./LanceMaster";
import SoulMaster from "./SoulMaster";
import Striker from "./Striker";

const FighterPage = () => {
  const [isBattleMaster, setBattleMaster] = useState(false);
  const [isInfighter, setInfighter] = useState(false);
  const [isLanceMaster, setLanceMaster] = useState(false);
  const [isSoulMaster, setSoulMaster] = useState(false);
  const [isStriker, setStriker] = useState(false);

  const clearState = useCallback(() => {
    setBattleMaster(false);
    setInfighter(false);
    setLanceMaster(false);
    setSoulMaster(false);
    setStriker(false);
  });

  const clickBattleMaster = () => {
    clearState();
    setBattleMaster(true);
  };
  const clickInfighter = () => {
    clearState();
    setInfighter(true);
  };
  const clickLanceMaster = () => {
    clearState();
    setLanceMaster(true);
  };
  const clickSoulMaster = () => {
    clearState();
    setSoulMaster(true);
  };
  const clickStriker = () => {
    clearState();
    setStriker(true);
  };

  const CardWrapper = styled(Card)`
    border: 0.5px solid;
    margin-top: 1rem;
  `;

  return (
    <>
      <CardWrapper
        title="무도가"
        headStyle={{ display: "flex", justifyContent: "center" }}
        size="small"
      >
        <Card.Grid
          style={{
            width: "20%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickBattleMaster}
        >
          <div>배틀마스터</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "20%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickInfighter}
        >
          <div>인파이터</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "20%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickLanceMaster}
        >
          <div>창술사</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "20%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickSoulMaster}
        >
          <div>기공사</div>
        </Card.Grid>
        <Card.Grid
          style={{ width: "20%", justifyContent: "center", display: "flex" }}
          onClick={clickStriker}
        >
          <div>스트라이커</div>
        </Card.Grid>
      </CardWrapper>
      {isBattleMaster ? <BattleMaster /> : <></>}
      {isInfighter ? <Infighter /> : <></>}
      {isLanceMaster ? <LanceMaster /> : <></>}
      {isSoulMaster ? <SoulMaster /> : <></>}
      {isStriker ? <Striker /> : <></>}
    </>
  );
};

export default FighterPage;
