import React, { useCallback, useState } from "react";
import { Card } from "antd";
import styled from "styled-components";

import Blaster from "./Blaster";
import DevilHunter from "./DevilHunter";
import HawkEye from "./HawkEye";
import Scouter from "./Scouter";
import Gunslinger from "./Gunslinger";

const HunterPage = ({ SettingPreset }) => {
  const [isBlaster, setBlasterPage] = useState(false);
  const [isDevilHunter, setDevilHunterPage] = useState(false);
  const [isHawkEye, setHawkEyePage] = useState(false);
  const [isScouter, setScouterPage] = useState(false);
  const [isGunslinger, setGunslingerPage] = useState(false);

  const clearState = useCallback(() => {
    setBlasterPage(false);
    setDevilHunterPage(false);
    setHawkEyePage(false);
    setScouterPage(false);
    setGunslingerPage(false);
  }, []);

  const clickBlaster = () => {
    clearState();
    setBlasterPage(true);
  };
  const clickDevilHunter = () => {
    clearState();
    setDevilHunterPage(true);
  };
  const clickHawkEye = () => {
    clearState();
    setHawkEyePage(true);
  };
  const clickScouter = () => {
    clearState();
    setScouterPage(true);
  };
  const clickGunslinger = () => {
    clearState();
    setGunslingerPage(true);
  };

  const CardWrapper = styled(Card)`
    border: 0.5px solid;
    margin-top: 1rem;
  `;

  return (
    <>
      <CardWrapper
        title="헌터"
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
          onClick={clickBlaster}
        >
          <div>블래스터</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "20%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickDevilHunter}
        >
          <div>데빌헌터</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "20%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickHawkEye}
        >
          <div>호크아이</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "20%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickScouter}
        >
          <div>스카우터</div>
        </Card.Grid>
        <Card.Grid
          style={{ width: "20%", justifyContent: "center", display: "flex" }}
          onClick={clickGunslinger}
        >
          <div>건슬링어</div>
        </Card.Grid>
      </CardWrapper>
      {isBlaster ? <Blaster SettingPreset={SettingPreset} /> : <></>}
      {isDevilHunter ? <DevilHunter SettingPreset={SettingPreset} /> : <></>}
      {isHawkEye ? <HawkEye SettingPreset={SettingPreset} /> : <></>}
      {isScouter ? <Scouter SettingPreset={SettingPreset} /> : <></>}
      {isGunslinger ? <Gunslinger SettingPreset={SettingPreset} /> : <></>}
    </>
  );
};

export default HunterPage;
