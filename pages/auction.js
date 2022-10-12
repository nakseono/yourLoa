import React, { useState, useCallback } from "react";
import AppLayout from "../components/AppLayout";

import { Typography, Input, Radio, Tooltip } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const AuctionTitle = styled(Title)`
  display: flex;
  justify-content: center;
`;

const AuctionPrice = styled(Input)`
  display: flex;
  margin: auto;
  max-width: 300px;
`;

const AuctionResult = styled(Typography)`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 300px;
  margin-top: 20px;
  padding-top: 10px;
`;

const PartyNumber = styled(Radio.Group)`
  display: flex;
  margin: auto;
  width: 300px;
  justify-content: space-evenly;
  margin-top: 15px;
`;

const Auction = () => {
  const [price, setPrice] = useState("");
  const [competition, setCompetition] = useState(true);

  const calcPrice = parseInt(price.replace(",", ""));

  const NaNFilter = (value) => {
    return (value = value || 0);
  };

  const addComma = (v) => {
    return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  let competitionPrice4 = addComma(NaNFilter(Math.ceil(calcPrice * 0.6478)));
  let competitionPrice8 = addComma(NaNFilter(Math.ceil(calcPrice * 0.7556)));

  let partyPrice4 = addComma(NaNFilter(Math.ceil(calcPrice * 0.95 * (3 / 4))));
  let partyPrice8 = addComma(NaNFilter(Math.ceil(calcPrice * 0.95 * (7 / 8))));

  // 입찰할때는 최적가 계산은
  // 구매 최적가 = 경매가 x 0.95 x 3/4 (4인)
  // 구매 최적가 = 경매가 x 0.95 x 7/8 (8인)
  // 구매 최적가 = 경매가 x 0.95 x 15/16 (16인)

  const onChangePrice = useCallback(
    (e) => {
      setPrice(e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    },
    [price]
  );

  const onChangeCompetition = useCallback(() => {
    setCompetition(!competition);
  }, [competition]);

  return (
    <AppLayout>
      <AuctionTitle>경매 분배/입찰금 계산기</AuctionTitle>
      <AuctionPrice
        placeholder="거래소 가격을 입력해주세요"
        maxLength={6}
        prefix="거래소 가격 : "
        onChange={onChangePrice}
        allowClear
      />

      <PartyNumber defaultValue="competition" onChange={onChangeCompetition}>
        <Tooltip title="경쟁 금액은 경매에 참여하는 모두가 경쟁 상대로써, 얼마까지 입찰해야 손해를 보지 않는지 계산합니다.">
          <Radio.Button value="competition">경쟁</Radio.Button>
        </Tooltip>
        <Tooltip title="분배 금액은 N명이 모두 합의하에 N빵 하는 것을 간주하고 계산합니다.">
          <Radio.Button value="party">분배</Radio.Button>
        </Tooltip>
      </PartyNumber>

      {competition ? (
        <AuctionResult>
          <pre style={{ display: "flex", justifyContent: "center" }}>
            4명 기준 입찰해야 할 금액 : {competitionPrice4} 골드
          </pre>
          <pre style={{ display: "flex", justifyContent: "center" }}>
            8명 기준 입찰해야 할 금액 : {competitionPrice8} 골드
          </pre>
        </AuctionResult>
      ) : (
        <AuctionResult>
          <pre style={{ display: "flex", justifyContent: "center" }}>
            4명 기준 입찰해야 할 금액 : {partyPrice4} 골드
          </pre>
          <pre style={{ display: "flex", justifyContent: "center" }}>
            8명 기준 입찰해야 할 금액 : {partyPrice8} 골드
          </pre>
        </AuctionResult>
      )}
    </AppLayout>
  );
};

export default Auction;
