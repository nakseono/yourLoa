import React, { useState, useEffect, useCallback, useRef } from "react";
import { Input, Button, Upload } from "antd";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import styled from "styled-components";
import { EditOutlined, UploadOutlined } from "@ant-design/icons";

import AppLayout from "../components/AppLayout";

const WritePostBtnWrapper = styled.div`
  display: flex;
  justify-content: end;

  .upload-list-inline {
    margin-right: auto;
    width: 25%;
  }
`;

const Board = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const imageInput = useRef();

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

  const onChangeImages = useCallback((e) => {
    console.log("images", e);

    const imageFormData = new FormData();

    // [].forEach.call(e.target.files, (f) => {
    //   imageFormData.append("image", f);
    // });

    // dispatch({
    //   type: UPLOAD_IMAGES_REQUEST,
    //   data: imageFormData,
    // });
  });

  const onSubmitWritePost = useCallback(() => {
    if (!postTitle || !postTitle.trim()) {
      return alert("게시글 제목을 작성하세요.");
    }

    if (!postContent || !postContent.trim()) {
      return alert("게시글 내용을 작성하세요.");
    }
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
        <Upload
          // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          className="upload-list-inline"
          onChange={onChangeImages}
          multiple="true"
        >
          <Button icon={<UploadOutlined />}>이미지 업로드</Button>
        </Upload>
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
