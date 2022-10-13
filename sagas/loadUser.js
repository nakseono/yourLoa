import axios from "axios";
import { all, fork, takeLatest, put, call } from "redux-saga/effects";

import {
  LOAD_SEARCH_USER_INFO_REQUSET,
  LOAD_SEARCH_USER_INFO_DONE,
  LOAD_SEARCH_USER_INFO_ERROR,
} from "../reducers/loadUser";

function loadSearchUserInfoAPI(data) {
  // console.log(`loadSearchUserInfoAPI 작동`);
  return axios.get(`https://lostarkapi.ga/userinfo/${data}`);
}

function* loadSearchUserInfo(action) {
  try {
    const result = yield call(loadSearchUserInfoAPI, action.data);

    console.log(`result : ${Object.values(result)}`);

    yield put({
      type: LOAD_SEARCH_USER_INFO_DONE,
      data: result.data,
    });
  } catch (error) {
    console.error(`loadSearchUserInfo error : ${error}`);
    yield put({
      type: LOAD_SEARCH_USER_INFO_ERROR,
      error: error.response.data,
    });
  }
}

function* watchLoadSeachUserInfo() {
  yield takeLatest(LOAD_SEARCH_USER_INFO_REQUSET, loadSearchUserInfo);
}

export default function* loadUserSaga() {
  yield all([fork(watchLoadSeachUserInfo)]);
}
