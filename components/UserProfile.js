import React from "react";
import { Card, Avatar, Button, Tooltip } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const ButtonStyle = styled(Button)`
  font-size: 11px;
  position: absolute;
  width: 50px;
  height: 25px;
  top: 20px;
  right: 17px;
  text-align: center;
  padding: 0;
  padding-left: 4px;
  border-radius: 14px;
  border: solid 0.3px;
`;

const profileDefine = ({ server, mainChar, mainCharLv }) => {
  return `${server} | ${mainChar} - Lv.${mainCharLv}`;
};

const UserProfile = () => {
  return (
    <Card
      style={{ marginBottom: "10px" }}
      actions={[
        <Tooltip placement="top" title="yourLoa 페이지 설정" trigger="hover">
          <SettingOutlined key="setting" className="CardIcon" />
        </Tooltip>,

        <Tooltip placement="top" title="프로필 설정" trigger="hover">
          <EditOutlined key="edit" className="CardIcon" />
        </Tooltip>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>프사</Avatar>}
        title="유저 닉네임 님"
        description={profileDefine("test", "test", "test")}
      />
      <ButtonStyle>로그아웃</ButtonStyle>
    </Card>
  );
};

export default UserProfile;
