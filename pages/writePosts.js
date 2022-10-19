import React, { useState, useEffect, useCallback } from "react";
import { Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import styled from "styled-components";
import { EditOutlined } from "@ant-design/icons";

import AppLayout from "../components/AppLayout";

const WritePostBtnWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const Board = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [postTitle, setPostTitle] = useState(``);
  const [postContent, setPostContent] = useState(``);

  const onChangePostTitle = useCallback(
    (e) => {
      setPostTitle(e.target.value);
    },
    [postTitle]
  );

  const onChangePostContent = useCallback(
    (e) => {
      setPostContent(e.target.value);
    },
    [postContent]
  );

  const onClickCancelBtn = useCallback(() => {
    router.push("/community");
  }, []);

  const onSubmitWritePost = useCallback(() => {
    // dispatch({
    //   type: POST ~~
    // })
    console.log(postTitle, postContent);
  }, [postTitle, postContent]);

  return (
    <AppLayout>
      <Input
        size="large"
        placeholder="제목을 입력해주세요."
        value={postTitle}
        onChange={onChangePostTitle}
        style={{ marginBottom: "15px" }}
      />

      <Input.TextArea
        value={postContent}
        onChange={onChangePostContent}
        placeholder="내용을 입력하세요."
        autoSize={{ minRows: 20, maxRows: 300 }}
        style={{ marginBottom: "20px" }}
      />

      <WritePostBtnWrapper>
        <Button onClick={onClickCancelBtn}>취소</Button>
        <Button
          type="primary"
          onClick={onSubmitWritePost}
          style={{ marginLeft: "10px" }}
        >
          <EditOutlined />글 등록
        </Button>
      </WritePostBtnWrapper>
    </AppLayout>
  );
};

export default Board;
