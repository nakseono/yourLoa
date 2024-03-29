import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import loadChar from "./loadChar";
import user from "./user";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      // console.log("HYDRATE", action);
      return action.payload;

    default: {
      const combinedReducer = combineReducers({
        loadChar,
        user,
      });
      return combinedReducer(state, action);
    }
  }
};
export default rootReducer;
