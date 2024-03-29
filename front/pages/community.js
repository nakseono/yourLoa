import React, { useEffect, useCallback } from "react";
import { List, Space, Button, Segmented } from "antd";
import {
  LikeOutlined,
  MessageOutlined,
  BarsOutlined,
  EditOutlined,
  StarOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import AppLayout from "../components/AppLayout";

const ListWrapper = styled(List)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .ant-list-pagination {
    text-align: center;
  }

  .ant-list-item-extra img {
    width: 200px;
  }

  .ant-list-item {
    border-bottom: 1px solid black;
    padding: 20px 28px;
    :hover {
      background-color: rgb(205, 231, 243, 0.5);
      cursor: pointer;
    }
  }

  .ant-list-item-main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .ant-list-item-meta {
    flex: 0;
  }

  .ant-list-item-action {
    margin-right: auto;
    margin-left: 0;
  }

  .ant-list-item-meta,
  .ant-list-item-meta-title {
    margin-bottom: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const WriteBtn = styled(Button)`
  margin-left: auto;
`;

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: "https://ant.design",
  title: `글 제목 ${i}`,
  avatar: "https://joeschmoe.io/api/v1/random",
  content: "글 내용 ~",
}));

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Board = () => {
  const router = useRouter();
  const { logInUserInfo } = useSelector((state) => state.user);

  const onClickPost = useCallback(() => {
    router.push(`/posts/${1}`);
  }, []);

  const onClickPostWriteBtn = useCallback(() => {
    router.push(`/writePosts`);
  }, []);

  return (
    <AppLayout>
      <ButtonWrapper>
        <Segmented
          options={[
            {
              label: "최신순",
              value: "Latest",
              icon: <BarsOutlined />,
            },
            {
              label: "추천순",
              value: "Stars",
              icon: <StarOutlined />,
            },
          ]}
        />

        <WriteBtn type="primary" onClick={onClickPostWriteBtn}>
          <EditOutlined />
          글쓰기
        </WriteBtn>

        {/* {logInUserInfo ? (
          SPACE SPACE SPACE SPACE SPACE SPACE
        ) : (
          <></>
        )} */}
      </ButtonWrapper>

      <ListWrapper
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            onClick={onClickPost}
            key={item.title}
            actions={[
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              // avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
            />
            {item.content}
          </List.Item>
        )}
      />
    </AppLayout>
  );
};

export default Board;
