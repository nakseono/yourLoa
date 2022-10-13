import React from "react";
import { useRouter } from "next/router";
import { LOAD_SEARCH_USER_INFO_REQUSET } from "../../reducers/loadUser";
import wrapper from "../../store/configureStore";
import AppLayout from "../../components/AppLayout";
import { END } from "redux-saga";

const searchUserInfo = () => {
  const router = useRouter();

  const { nickname } = router.query;

  return (
    <AppLayout>
      <div>{nickname} 테스트</div>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    context.store.dispatch({
      type: LOAD_SEARCH_USER_INFO_REQUSET,
      data: Object.values(context.resolvedUrl).join("").slice(12),
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default searchUserInfo;
