import React from "react";
import { List, Typography, Divider } from "antd";

const data = [
  "배럭 할 일 1",
  "배럭 할 일 2",
  "배럭 할 일 3",
  "배럭 할 일 4",
  "배럭 할 일 5",
];

const TodoListCut = () => {
  return (
    <>
      <Divider orientation="left">배럭 Todo</Divider>
      <List
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </>
  );
};

export default TodoListCut;
