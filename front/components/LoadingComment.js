import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Skeleton } from "antd";

import AppLayout from "./AppLayout";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const LoadingComment = () => {
  return (
    <AppLayout>
      <Spin indicator={antIcon} size="large" tip="검색하신 캐릭터의 정보를 불러오는 중입니다..">
        <Skeleton />
      </Spin>
    </AppLayout>
  );
};

export default LoadingComment;
