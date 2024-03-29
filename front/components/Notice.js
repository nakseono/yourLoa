import React from "react";
import { List, Divider, Avatar } from "antd";

const noticeData = [
  {
    title: "공지사항 1",
  },
  {
    title: "공지사항 2",
  },
  {
    title: "공지사항 3",
  },
  {
    title: "공지사항 4",
  },
];

const Notice = () => {
  return (
    <List
      header={<div>공지사항</div>}
      style={{ margin: "7px" }}
      bordered
      size="small"
      itemLayout="horizontal"
      dataSource={noticeData}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="noticePost content"
          />
        </List.Item>
      )}
    />
  );
};

export default Notice;
