import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Menu, Button, Dropdown, Avatar } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";

import { LOG_OUT_REQUEST } from "../reducers/user";

const UserAfterLogin = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  const LoginMenu = (
    <Menu
      items={[
        {
          label: "내 정보",
          key: "0",
        },
        {
          label: "2nd menu item",
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: "로그아웃",
          key: "logout",
          onClick: onLogOut,
        },
      ]}
    />
  );

  return (
    <Dropdown
      overlay={LoginMenu}
      trigger={["click"]}
      overlayStyle={{ paddingTop: "30px" }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Avatar shape="square" size="large" icon={<UserOutlined />} />
      </a>
    </Dropdown>
  );
};

export default UserAfterLogin;
