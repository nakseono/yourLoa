import React from "react";
import styled from "styled-components";

const PointDiv = styled.div`
  font-size: 16px;
  font-weight: bold;
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
    <div>헬블레이드 템페스트 피니쉬 스트라이크웨이브 블러 블러</div>
    <br />
    <PointDiv>쿨감 보석 (홍염)</PointDiv>
    <div>
      스트라이크웨이브 피니쉬 헬블레이드 레드더스트 윈드블레이드블러 블러
    </div>
  </>
);

const ChaosSkillTree = (
  <>
    <div>레드더스트10 - 빠른준비, 급소타격, 붉은파도 - 출혈</div>
    <div>피니쉬 스트라이크10 - 강화된일격, 마무리일격, 확인사살 - 질풍 </div>
    <div>템페스트 슬래쉬10 - 빠른준비, 강화일격, 휘몰아치기 - 풍요 </div>
    <div>스트라이크웨이브10 - 빠른준비, 켈베로스, 블레이즈웨이브 - 질풍</div>
    <div>훨윈드10 - 지속증, 갈라진칼날, 진공베기 - 출혈</div>
    <div>헬블레이드10 - 범위증가, 융해, 대지뒤집기 - 질풍</div>
    <div>오러블레이드7 - 원거리타격, 파괴</div>
    <div>첫 번째 각성기 채용</div>
    <br />
    <PointDiv>❗️괄호 스킬들은 취향따라 추가할만한 스킬입니다.</PointDiv>
    <div>(소드스톰 7 or 10 - 빠른준비, 후폭풍, 화염 OR 지진파동)</div>
    <div>
      (윈드블레이드10 - 가속 or 빠른준비, 급소타격, 윈드스위프트) or (메일스톰
      10 - 날렵, 급소, 화염)
    </div>
  </>
);

const Berserker = ({ SettingPreset }) => {
  return (
    <>
      <div style={{ fontWeight: "600" }}>
        ❗️ 현재 버서커의 직업각인 중 "광기" 각인은 그 효율이 매우 낮아 채용하지
        않습니다.
      </div>
      <SettingPreset
        className="광전사의 비기 버서커"
        equip="6지배"
        mainChar="특화"
        subChar="치명"
        mark="원한 / 정기흡수 / 돌격대장 / 각성 / 광전사의 비기"
        skill={RaidSkillTree}
        gem={SkillGem}
        chaos={ChaosSkillTree}
      />
    </>
  );
};

export default Berserker;
