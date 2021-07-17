import React, { useState, useCallback } from "react";
import { Card } from "antd";
import styled from "styled-components";

import AppLayout from "../components/AppLayout.js";

import WarriorPage from "./Guide/GuidePages/Warrior/WarriorPage";
import MagicianPage from "./Guide/GuidePages/Magician/MagicianPage";
import HunterPage from "./Guide/GuidePages/Hunter/HunterPage";
import FighterPage from "./Guide/GuidePages/Fighter/FighterPage";
import AssasinPage from "./Guide/GuidePages/Assasin/AssasinPage";

const Guide = () => {
  //! <-- states -->
  const [adviceMessage, setMessage] = useState(true);

  const [isWarrior, setWarriorPage] = useState(false);
  const [isMagician, setMagicianPage] = useState(false);
  const [isHunter, setHunterPage] = useState(false);
  const [isFighter, setFighterPage] = useState(false);
  const [isAssasin, setAssasinPage] = useState(false);

  const clearState = useCallback(() => {
    setMessage(false);
    setWarriorPage(false);
    setMagicianPage(false);
    setHunterPage(false);
    setFighterPage(false);
    setAssasinPage(false);
  }, []);

  const clickWarrior = () => {
    clearState();
    setWarriorPage(true);
  };
  const clickMagician = () => {
    clearState();
    setMagicianPage(true);
  };
  const clickHunter = () => {
    clearState();
    setHunterPage(true);
  };
  const clickFighter = () => {
    clearState();
    setFighterPage(true);
  };
  const clickAssasin = () => {
    clearState();
    setAssasinPage(true);
  };

  //! <-- styled -->

  const CardWrapper = styled(Card)`
    border: 0.5px solid;
    margin-top: 1.5rem;
  `;

  const CardCompoStyled = styled(Card.Grid)`
    width: 20%;
    border-right: solid 0.5px;
    display: flex;
    justify-content: center;
  `;

  return (
    <AppLayout>
      <CardWrapper
        title="전 클래스"
        headStyle={{ display: "flex", justifyContent: "center" }}
        size="small"
      >
        <CardCompoStyled onClick={clickWarrior}>
          <div>전사</div>
        </CardCompoStyled>
        <CardCompoStyled onClick={clickMagician}>
          <div>마법사</div>
        </CardCompoStyled>
        <CardCompoStyled onClick={clickHunter}>
          <div>헌터</div>
        </CardCompoStyled>
        <CardCompoStyled onClick={clickFighter}>
          <div>무도가</div>
        </CardCompoStyled>
        <Card.Grid
          style={{ width: "20%", justifyContent: "center", display: "flex" }}
          onClick={clickAssasin}
        >
          <div>암살자</div>
        </Card.Grid>
      </CardWrapper>
      {adviceMessage ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          ↑↑↑ 위 박스에서 각 클래스명을 클릭하면 세부 클래스가 보입니다! ↑↑↑
        </div>
      ) : (
        <></>
      )}
      {isWarrior ? <WarriorPage /> : <></>}
      {isMagician ? <MagicianPage /> : <></>}
      {isHunter ? <HunterPage /> : <></>}
      {isFighter ? <FighterPage /> : <></>}
      {isAssasin ? <AssasinPage /> : <></>}
    </AppLayout>
  );
};

export default Guide;
