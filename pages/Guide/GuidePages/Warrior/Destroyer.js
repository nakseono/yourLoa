import React, { useState, useCallback } from "react";
import { Card } from "antd";
import styled from "styled-components";

const PointDiv = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

//! <-- 중력수련 스킬트리 | 보석 -->

const GravitySkillTree = (
  <>
    <PointDiv style={{ fontSize: "20px" }}>집속 스킬(파란색)</PointDiv>
    <div>헤비 크러쉬 10 - 순간타격, 행운의 코어, 넓은 타격 or 여진 - 광분</div>
    <div>
      인듀어 페인 10 - 넓은 타격, 고통의 흔적, 건강한 정신 or 숨겨진 고통 - 광분
      or 집중
    </div>
    <br />
    <PointDiv>그라비티 임팩트, 드레드 노트, 파워 스트라이크 중 택 1</PointDiv>
    <div>
      그라비티 임팩트 10 - 행운의 코어, 단단한 정신, 의지 강화 - 정화 or 속행
    </div>
    <div>드레드 노트 7 - 강인함, 단단한 신체 - 수호</div>
    <div>
      파워 스트라이크 7 or 10 - 빠른 준비, 행운의 코어, X or 치밀한 타격 - 질풍
    </div>{" "}
    <br />
    <PointDiv>점핑 스매쉬, 러닝 크래쉬 중 택 1</PointDiv>
    <div>점핑 스매쉬 7 or 10 - 탁월한 변화, 행운의 코어, X or 분쇄 - 수호</div>
    <div>
      러닝 크래쉬 4 or 10 - 행운의 코어, X or 집중 표적, X or 저돌적 움직임 -
      질풍
    </div>
    <br />
    <PointDiv style={{ fontSize: "20px" }}>해방 스킬(보라색)</PointDiv>
    <div>
      사이즈믹 해머 10 - 절대적인 힘, 뇌진탕 or 날카로운 벽, 굶주린 힘 - 압도 or
      질풍
    </div>
    <div>퍼펙트 스윙 10 - 약점 포착, 뇌진탕, 학살의 시간 - 압도</div> <br />
    <PointDiv>어스 이터, 뉴트럴 라이저, 풀 스윙 중 택 2</PointDiv>
    <div>어스 이터 10 - 강화된 일격, 강인함, 대지의 분노 - 압도</div>
    <div>뉴트럴 라이저 10 - 강한 충격, 성장하는 중력, 중력 조절 - 질풍</div>
    <div>풀 스윙 10 - 재빠른 움직임, 무서운 해머, 야수의 눈 - 질풍 or 압도</div>
  </>
);

const GravityGem = (
  <>
    <PointDiv>딜증 보석 (멸화)</PointDiv>
    <div>중력가중모드 / 해방스킬 4종</div>
    <br />
    <PointDiv>쿨감 보석 (홍염)</PointDiv>
    <div>집속스킬 4종 / 해방스킬 4종</div>
  </>
);

//! <-- 분노의 망치 스킬트리 / 보석 -->

const HammerSkillTree = (
  <>
    <PointDiv>5집속 3해방 스킬트리</PointDiv>
    <div>헤비 크러쉬 10 - 순간타격, 행운의 코어, 여진 - 출혈</div>
    <div>
      그라비티 임팩트 10 - 행운의 코어, 단단한 정신, 의지 강화 - 광분 or 속행
    </div>
    <div>
      드레드 노트 10 - 강인함, 단단한 신체, 몰아치는 해머 - 수호 or 질풍
    </div>
    <div>러닝 크래쉬 7 - 행운의 코어, 집중 표적 - 속행 or 광분</div>
    <div>
      인듀어 페인 10 - 넓은 타격 or 중력 강화, 고통의 흔적, 숨겨진 고통 - 집중
      or 수호
    </div>
    <br />
    <div>풀 스윙 10 - 빠른 준비, 무서운 해머, 야수의 눈 - 질풍 or 압도</div>
    <div>퍼펙트 스윙 10 - 약점 포착, 날카로운 해머, 무절제 - 질풍</div>
    <div>사이즈믹 해머 10 - 절대적인 힘, 날카로운 벽, 굶주린 힘 - 질풍</div>
    <br />
    <div>각성기 - 빅뱅</div>
  </>
);

const HammerGem = (
  <>
    <PointDiv>딜증 보석 (멸화)</PointDiv>
    <div>해방스킬 3종</div>
    <br />
    <PointDiv>쿨감 보석 (홍염)</PointDiv>
    <div>
      해방기 3종 / 인듀어 페인 / 이후 자유롭게 주로 사용하는 집속 스킬들
    </div>
  </>
);

const Destroyer = ({ SettingPreset }) => {
  const [isGravity, setGravity] = useState(false);
  const [isHammer, setHammer] = useState(false);

  const clickGravity = useCallback(() => {
    setHammer(false);
    setGravity(true);
  }, []);
  const clickHammer = useCallback(() => {
    setGravity(false);
    setHammer(true);
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
        title="디스트로이어 직업 각인별 구분"
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
          onClick={clickGravity}
        >
          <div>중력수련</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "50%",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickHammer}
        >
          <div>분노의 망치</div>
        </Card.Grid>
      </CardWrapper>
      <ClassWrapper>
        {isGravity ? (
          <SettingPreset
            className="중수 디트"
            equip="6사멸"
            mainChar="특화"
            subChar="치명"
            mark="원한 / 바리게이트 / 결투의 대가 / 정기흡수 / 중력수련"
            skill={GravitySkillTree}
            gem={GravityGem}
          />
        ) : (
          <></>
        )}
        {isHammer ? (
          <SettingPreset
            className="분망 디트"
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

export default Destroyer;
