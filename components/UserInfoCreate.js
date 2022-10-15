import React, { useEffect } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import AppLayout from "./AppLayout";
import LoadingComment from "./LoadingComment";

const UserMainSlide = styled.div`
  width: 100%;
  border: 1px solid black;
  padding: 10px;
`;

const UserSubSlide = styled.div`
  width: 100%;
  border: 1px solid black;
  padding: 10px;
  margin-top: 15px;
`;

const UserInfoCreate = () => {
  const { searchUserInfo } = useSelector((state) => state.loadUser);

  return searchUserInfo === null ? (
    <LoadingComment />
  ) : (
    <AppLayout>
      <Row gutter={[24, 16]} justify="center">
        <Col sm={24} md={8} lg={6}>
          {/* 캐릭터 기본 정보 창. 캐릭터 이름, 칭호, Lv, 즐겨찾기 ? 등등.. */}
          <UserMainSlide>
            <div>{searchUserInfo.Basic.Name}</div>
            <div>{searchUserInfo.Basic.Class.Name}</div>
            <div>{searchUserInfo.Basic.Level.Item}</div>
            <div>{searchUserInfo.Basic.Server}</div>
            <div>{searchUserInfo.Basic.Title}</div>
          </UserMainSlide>
          <UserSubSlide>
            <div>{searchUserInfo.Basic.Guild}</div>
            <div>{searchUserInfo.Basic.Level.Battle}</div>
            <div>{searchUserInfo.Basic.Level.Expedition}</div>
            <div>
              {searchUserInfo.Basic.Wisdom.Level}
              {"  "}
              {searchUserInfo.Basic.Wisdom.Name}
            </div>
            <div>{searchUserInfo.Basic.Collections}</div>
          </UserSubSlide>
        </Col>
        <Col sm={24} md={16} lg={14}>
          <div>사사게 등록 이력 - 전 캐릭터 API 긁어와서..</div>
          <div>장비/악세</div>
          <div>보석</div>
          <div style={{ display: "flex" }}>
            <div>전투 특성</div>
            <div>각인 정보</div>
          </div>
          <div>보유 캐릭터 정보</div>
        </Col>
      </Row>
    </AppLayout>
  );
};

export default UserInfoCreate;
