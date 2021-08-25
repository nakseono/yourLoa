import React from "react";
import styled from "styled-components";

const PointDiv = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const CommentWrapper = styled.div`
  font-weight: bold;
  font-size: 16px;
  height: 50px;
  border: 1px solid;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const RaidSkillTree = (
  <>
    <div>
      마운틴 7 or 10 - 집중, 속공준비, 지진파 or 대지충돌(심판룬) -
      풍요/출혈/심판
    </div>
    <div>
      레드더스트 10 - 빠른준비, 급소타격, 피해증폭 출혈/집중(마운틴이나 레더중
      1개만 출혈넣을것)
    </div>
    <div>피니쉬 스트라이크 10 - 강화된일격, 약점포착, 확인사살 - 질풍</div>
    <div>템페스트 슬래쉬 10 - 집중, 약점포착, 휘몰아치기 - 풍요</div>
    <div>헬블레이드 10 - 도약, 융해, 대지뒤집기 - 질풍</div>
    <div>윈드블레이드 10 - 빠른준비, 집중, 윈드스위프트 - 풍요</div>
    <div>스트라이크웨이브 10 - 파동, 한계돌파, 대지뒤집기 - 질풍</div>
    <div>
      숄더차지 4 - 탁월한 기동성 or 타오르는불꽃(단죄룬) - 속행/광분/정화/단죄
    </div>
    <div>두 번째 각성기 채용</div>
    <br />
    <PointDiv>윈드블레이드 or 헬블레이드 대신 채용가능한 선택스킬</PointDiv>
    <div>
      파워브레이크 10 - 예리한일격 or 날렵한 움직임, 강화된일격, 위력축적 -
      질풍/풍요
    </div>
    <div>소드스톰 10 - 빠른준비, 약점포착, 지진 - 질풍/풍요</div>
    <div>
      휠윈드 10 - 빠른준비/대차륜/용오름 or 지속력/대차륜/진공베기 - 출혈
    </div>
  </>
);

const SkillGem = (
  <>
    <PointDiv>딜증 보석 (멸화)</PointDiv>
    <div>헬블레이드 / 템페스트 / 피니쉬 / 스트라이크웨이브 / 블러</div>
    <br />
    <PointDiv>쿨감 보석 (홍염)</PointDiv>
    <div>
      스트라이크 웨이브 / 피니쉬 / 헬블레이드 / 레드더스트 / 윈드블레이드 / 블러
    </div>
  </>
);

const Berserker = ({ SettingPreset }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div>LastUpdated. 21.07.27</div>
      </div>
      <CommentWrapper>
        ❗️ 현재 버서커의 직업각인 중 "광기" 각인은 그 효율이 매우 낮아 채용하지
        않습니다.
      </CommentWrapper>
      <SettingPreset
        className="광전사의 비기 버서커"
        equip="6지배 | 6악몽"
        mainChar="특화"
        subChar="치명"
        mark="원한 / 예리한 둔기 / 돌격대장 / 각성 / 정기흡수 2 / 광전사의 비기 1"
        skill={RaidSkillTree}
        gem={SkillGem}
      />
    </>
  );
};

export default Berserker;
