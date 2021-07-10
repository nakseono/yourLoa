import React from "react";
import AppLayout from "../components/AppLayout.js";

const Barrack = () => {
  return (
    <AppLayout>
      <div>배럭 페이지</div>
      <div>1. bynn.ark 처럼 본캐와 배럭들의 할 일을 정리하여 볼 수 있도록</div>
      <div>
        2. 정리 한 내용들은 각 계정의 DB에 연동해서 가져오고 할 수 있도록.
        (저장하기/불러오기 버튼을 만들어서 하자. 항시 연동은 쿠키에 담아서
        해야하므로 시행착오가 좀 있을 듯.){" "}
      </div>
      <div>
        3. 특정 레벨 [ex) 1325 ~ 1340 사이의 레벨 입력시] 해당 레벨에 할 수 있는
        컨텐츠 쭉 불러오고, 추가 및 수정할 수 있도록 수정
      </div>
    </AppLayout>
  );
};

export default Barrack;
