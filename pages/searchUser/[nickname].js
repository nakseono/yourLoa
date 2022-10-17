import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { END } from "redux-saga";

import wrapper from "../../store/configureStore";

import UserInfoCreate from "../../components/UserInfoCreate";

import {
  LOAD_SEARCH_USER_INFO_REQUSET,
  LOAD_SEARCH_USER_SASA_HISTORY_REQUSET,
} from "../../reducers/loadChar";

const searchUserInfo = () => {
  const router = useRouter();
  const { nickname } = router.query;

  return <UserInfoCreate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    console.log(`getServerSideProps start`);
    context.store.dispatch({
      type: LOAD_SEARCH_USER_INFO_REQUSET,
      data: Object.values(context.resolvedUrl).join("").slice(12),
    });
    // context.store.dispatch({
    //   type: LOAD_SEARCH_USER_SASA_HISTORY_REQUSET,
    //   data: Object.values(context.resolvedUrl).join("").slice(12),
    // });
    context.store.dispatch(END);
    console.log(`getServerSideProps end`);
    await context.store.sagaTask.toPromise();
  }
);

export default searchUserInfo;
