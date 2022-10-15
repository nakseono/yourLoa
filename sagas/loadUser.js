import axios from "axios";
import { all, fork, takeLatest, put, call } from "redux-saga/effects";

import {
  LOAD_SEARCH_USER_INFO_REQUSET,
  LOAD_SEARCH_USER_INFO_DONE,
  LOAD_SEARCH_USER_INFO_ERROR,
  LOAD_SEARCH_USER_SASA_HISTORY_REQUSET,
  LOAD_SEARCH_USER_SASA_HISTORY_DONE,
  LOAD_SEARCH_USER_SASA_HISTORY_ERROR,
} from "../reducers/loadUser";

function loadSearchUserInfoAPI(data) {
  // console.log(`loadSearchUserInfoAPI 작동`);
  return axios.get(`https://lostarkapi.ga/userinfo/${data}`);
}

function* loadSearchUserInfo(action) {
  try {
    const result = yield call(loadSearchUserInfoAPI, action.data);

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

function loadSearchUserSasaHistoryAPI(data) {
  let charList = Object.values(data.CharacterList).map((e) => e.Name);

  console.log(`charList : ${charList}`);

  var sasaList = [];

  charList.forEach((e) => {
    axios.get(``).then((res) => {
      if (
        res.data.SasaList ===
        ["최근 1만 게시글 중 (제목/내용) 검색 결과가 없습니다."]
      ) {
        sasaList.push({
          name: e,
          result: "최근 1만 게시글 중 (제목/내용) 검색 결과가 없습니다.",
        });
      } else {
        sasaList.push({ name: e, result: res.data.SasaList });
      }
    });
  });

  console.log(`API 나가기 직전 sasaList : ${sasaList}`);

  return sasaList;
}

function* loadSearchUserSasaHistory(action) {
  try {
    const result = yield call(loadSearchUserInfoAPI, action.data);

    console.log(`result : ${result.data}`)

    const sasaResult = yield call(loadSearchUserSasaHistoryAPI, result.data);

    yield put({
      type: LOAD_SEARCH_USER_SASA_HISTORY_DONE,
      data: sasaResult,
    });
  } catch (error) {
    console.error(`loadSearchUserSasaHistory error : ${error}`);
    yield put({
      type: LOAD_SEARCH_USER_SASA_HISTORY_ERROR,
      error: error.response.data,
    });
  }
}

function* watchLoadSeachUserInfo() {
  yield takeLatest(LOAD_SEARCH_USER_INFO_REQUSET, loadSearchUserInfo);
}
function* watchLoadSeachUserSasaHistory() {
  yield takeLatest(
    LOAD_SEARCH_USER_SASA_HISTORY_REQUSET,
    loadSearchUserSasaHistory
  );
}

export default function* loadUserSaga() {
  yield all([
    fork(watchLoadSeachUserInfo),
    fork(watchLoadSeachUserSasaHistory),
  ]);
}
