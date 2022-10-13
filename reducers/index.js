import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import loadUser from "./loadUser";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      // console.log("HYDRATE", action);
      return action.payload;

    default: {
      const combinedReducer = combineReducers({
        loadUser,
      });
      return combinedReducer(state, action);
    }
  }
};
export default rootReducer;
