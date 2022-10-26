import axios from "axios";
import { all, fork, takeLatest, put, call, delay } from "redux-saga/effects";

import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "../reducers/user";

const dummyLoginData = {
  userName: "testUserName",
  mainChar: "김낙서",
};

function logInAPI(data) {
  // return axios.post(`testAPI`)
  return dummyLoginData;
}

function* logIn(action) {
  try {
    // action.data 로 넘어오는 형식은 Obj로 { "userId": "id", "userPw": "password" } 로 넘어온다.
    const result = yield call(logInAPI, action.data);

    yield put({
      type: LOG_IN_SUCCESS,
      data: result,
    });
  } catch (error) {
    console.error(`saga login error : ${error}`);
    yield put({
      type: LOG_IN_FAILURE,
      data: error.response.data,
    });
  }
}

function logOutAPI(data) {
  // return axios.post(`logOutAPI`)
  return;
}

function* logOut(action) {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (error) {
    console.error(`saga logOut Error : ${error}`);
    yield put({
      type: LOG_OUT_FAILURE,
      data: error.response.data,
    });
  }
}

function signUpAPI(data) {
  return axios.post("/user", data);
}

function* signUp(action) {
  try {
    yield call(signUpAPI, action.data);

    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (error) {
    console.error(`saga signUp Error : ${error}`);
    yield put({
      type: SIGN_UP_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
