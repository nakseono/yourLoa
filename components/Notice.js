import React from "react";
import { List, Divider, Avatar } from "antd";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
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
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications"
          />
        </List.Item>
      )}
    />
  );
};

export default Notice;
