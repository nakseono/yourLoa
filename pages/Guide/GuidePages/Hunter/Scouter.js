import React from "react";
import { Divider } from "antd";

// 장비, 보석, 특성(메인,서브), 각인, 스킬/룬

const Scouter = ({ SettingPreset }) => {
  return (
    <>
      <SettingPreset
        className="유산 스카우터"
        equip="6지배"
        mainChar="특화"
        subChar="치명"
        mark="원한 / 돌격대장 / 바리게이트 / 각성 or 기습의 대가 or 예리한 둔기 /
      진화의 유산"
      />
      <Divider style={{ backgroundColor: "black" }} />
      <SettingPreset
        className="기술 스카우터"
        equip="?"
        mainChar="?"
        subChar="?"
        mark="?"
      />
    </>
  );
};

export default Scouter;
