import React from "react";
import AppLayout from "../components/AppLayout.js";

const Guide = () => {
  return (
    <AppLayout>
      <div>클래스별 공략</div>
      <div>1. 맨 위에는 각 페이지로 이동하는 표? 를 만들어둠.</div>
      <div>2. 그 표는 각 직업군으로 나누고, 내부에서 각 클래스로 구분한다.</div>
      <div>
        3. 각 클래스별로 하위 컴포넌트를 나눠야 하므로 맨 위의 표를 제외한
        아래에 컴포넌트 구분
      </div>
      <Warlord /> //! 여기 컴포넌트 바뀔건 또 페이지를 만드는것이 좋을 듯..
    </AppLayout>
  );
};

export default Guide;
