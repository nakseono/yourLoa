import React, { useCallback, useState } from "react";
import { Card } from "antd";
import styled from "styled-components";

import BattleMaster from "./BattleMaster";
import Infighter from "./Infighter";
import LanceMaster from "./LanceMaster";
import SoulMaster from "./SoulMaster";
import Striker from "./Striker";

const FighterPage = ({ SettingPreset }) => {
  const [isBattleMaster, setBattleMasterPage] = useState(false);
  const [isInfighter, setInfighterPage] = useState(false);
  const [isLanceMaster, setLanceMasterPage] = useState(false);
  const [isSoulMaster, setSoulMasterPage] = useState(false);
  const [isStriker, setStrikerPage] = useState(false);

  const clearState = useCallback(() => {
    setBattleMasterPage(false);
    setInfighterPage(false);
    setLanceMasterPage(false);
    setSoulMasterPage(false);
    setStrikerPage(false);
  });

  const clickBattleMaster = () => {
    clearState();
    setBattleMasterPage(true);
  };
  const clickInfighter = () => {
    clearState();
    setInfighterPage(true);
  };
  const clickLanceMaster = () => {
    clearState();
    setLanceMasterPage(true);
  };
  const clickSoulMaster = () => {
    clearState();
    setSoulMasterPage(true);
  };
  const clickStriker = () => {
    clearState();
    setStrikerPage(true);
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
      {isBattleMaster ? <BattleMaster SettingPreset={SettingPreset} /> : <></>}
      {isInfighter ? <Infighter SettingPreset={SettingPreset} /> : <></>}
      {isLanceMaster ? <LanceMaster SettingPreset={SettingPreset} /> : <></>}
      {isSoulMaster ? <SoulMaster SettingPreset={SettingPreset} /> : <></>}
      {isStriker ? <Striker SettingPreset={SettingPreset} /> : <></>}
    </>
  );
};

export default FighterPage;
