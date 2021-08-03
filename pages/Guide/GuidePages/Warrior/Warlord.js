import React, { useState, useCallback } from "react";
import { Card } from "antd";
import styled from "styled-components";

const PointDiv = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const MeatSkillTree = (
  <>
    <div>
      파이어불릿 10 - 행운의 기회 or 마력 조절 - 강화된 일격 - 공격 창출 - 심판
    </div>
    <div>대쉬 어퍼 파이어 10 </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </>
);

const Warlord = ({ SettingPreset }) => {
  const [isMeat, setMeat] = useState(false);
  const [isBattle, setBattle] = useState(false);

  const clickMeat = useCallback(() => {
    setBattle(false);
    setMeat(true);
  }, []);
  const clickBattle = useCallback(() => {
    setMeat(false);
    setBattle(true);
  }, []);

  const CardWrapper = styled(Card)`
    border: 0.5px solid;
  `;
  const ClassWrapper = styled.div`
    margin-top: 1rem;
  `;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div>LastUpdated. 21.07.27</div>
      </div>
      <CardWrapper
        title="워로드 직업 각인별 구분"
        headStyle={{
          display: "flex",
          justifyContent: "center",
          fontSize: "18px",
          fontWeight: "bold",
        }}
        size="small"
      >
        <Card.Grid
          style={{
            width: "50%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickMeat}
        >
          <div>고독한 기사</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "50%",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickBattle}
        >
          <div>전투 태세</div>
        </Card.Grid>
      </CardWrapper>
      <ClassWrapper>
        {isMeat ? (
          <SettingPreset
            className="고기로드"
            equip="6사멸"
            mainChar="치명"
            subChar="신속"
            mark="원한 / 바리게이트 / 결투의 대가 / 정기흡수 / 중력수련"
            skill={GravitySkillTree}
            gem={GravityGem}
          />
        ) : (
          <></>
        )}
        {isBattle ? (
          <SettingPreset
            className="전태로드"
            equip="6사멸"
            mainChar="치명"
            subChar="특화 or 신속"
            mark="원한 / 슈퍼차지 / 바리게이트 / 결투의 대가 or 저주받은 인형 or 정기 흡수 / 분노의 망치"
            skill={HammerSkillTree}
            gem={HammerGem}
          />
        ) : (
          <></>
        )}
      </ClassWrapper>
    </>
  );
};

export default Warlord;
