import React, { useCallback, useState } from "react";
import { Card } from "antd";
import styled from "styled-components";

import Arcana from "./Arcana";
import Bard from "./Bard";
import Sorceress from "./Sorceress";
import Summoner from "./Summoner";

const MagicianPage = () => {
  const [isArcana, setArcanaPage] = useState(false);
  const [isBard, setBardPage] = useState(false);
  const [isSummoner, setSummonerPage] = useState(false);
  const [isSorceress, setSorceressPage] = useState(false);

  const clearState = useCallback(() => {
    setArcanaPage(false);
    setBardPage(false);
    setSummonerPage(false);
    setSorceressPage(false);
  }, []);

  const clickArcana = () => {
    clearState();
    setArcanaPage(true);
  };
  const clickBard = () => {
    clearState();
    setBardPage(true);
  };
  const clickSummorner = () => {
    clearState();
    setSummonerPage(true);
  };
  const clickSorceress = () => {
    clearState();
    setSorceressPage(true);
  };

  const CardWrapper = styled(Card)`
    border: 0.5px solid;
    margin-top: 1rem;
  `;

  return (
    <>
      <CardWrapper
        title="마법사"
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
          onClick={clickArcana}
        >
          <div>아르카나</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "25%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickBard}
        >
          <div>바드</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "25%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickSummorner}
        >
          <div>서머너</div>
        </Card.Grid>
        <Card.Grid
          style={{ width: "25%", justifyContent: "center", display: "flex" }}
          onClick={clickSorceress}
        >
          <div>소서리스</div>
        </Card.Grid>
      </CardWrapper>

      {isArcana ? <Arcana /> : <></>}
      {isBard ? <Bard /> : <></>}
      {isSummoner ? <Summoner /> : <></>}
      {isSorceress ? <Sorceress /> : <></>}
    </>
  );
};

export default MagicianPage;
