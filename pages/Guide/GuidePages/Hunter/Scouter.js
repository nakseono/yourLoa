import React from "react";
import { Descriptions } from "antd";

const Scouter = () => {
  return (
    <>
      <Descriptions title="스카우터" bordered>
        <Descriptions.Item label="군단장 장비">6지배</Descriptions.Item>
        <Descriptions.Item label="메인 특성">특화</Descriptions.Item>
        <Descriptions.Item label="보조 특성">치명</Descriptions.Item>

        <Descriptions.Item label="각인" span={3}>
          원한 / 돌격대장 / 바리게이트 / 각성 or 기습의 대가 or 예리한 둔기 /
          진화의 유산
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default Scouter;
