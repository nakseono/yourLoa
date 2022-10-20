import React from "react";
import { List, Divider, Avatar } from "antd";

const hotPostData = [
  {
    title: "커뮤니티 인기 게시글 1",
  },
  {
    title: "커뮤니티 인기 게시글 2",
  },
  {
    title: "커뮤니티 인기 게시글 3",
  },
  {
    title: "커뮤니티 인기 게시글 4",
  },
];

const HotPost = () => {
  return (
    <List
      header={<div>커뮤니티 인기 게시글</div>}
      style={{ margin: "7px" }}
      bordered
      size="small"
      itemLayout="horizontal"
      dataSource={hotPostData}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="hotpost content"
          />
        </List.Item>
      )}
    />
  );
};

export default HotPost;
