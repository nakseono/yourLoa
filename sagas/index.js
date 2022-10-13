import { all, fork } from "redux-saga/effects";
import axios from "axios";

import loadUserSaga from "./loadUser";
// import postSaga from "./post";

// axios.defaults.baseURL = "http://localhost:3065";
// axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(loadUserSaga)]);
}
