import produce from "immer";

export const initialState = {
  loadSearchUserInfoLoading: false,
  loadSearchUserInfoDone: false,
  loadSearchUserInfoError: null,
  searchUserInfo: null,
};

export const LOAD_SEARCH_USER_INFO_REQUSET = "LOAD_SEARCH_USER_INFO_REQUSET";
export const LOAD_SEARCH_USER_INFO_DONE = "LOAD_SEARCH_USER_INFO_DONE";
export const LOAD_SEARCH_USER_INFO_ERROR = "LOAD_SEARCH_USER_INFO_ERROR";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_SEARCH_USER_INFO_REQUSET:
        draft.loadSearchUserInfoLoading = true;
        draft.loadSearchUserInfoError = null;
        draft.loadSearchUserInfoDone = false;
        break;
      case LOAD_SEARCH_USER_INFO_DONE:
        draft.loadSearchUserInfoLoading = false;
        draft.searchUserInfo = action.data;
        draft.loadSearchUserInfoDone = true;
        break;
      case LOAD_SEARCH_USER_INFO_ERROR:
        draft.loadSearchUserInfoLoading = false;
        draft.loadSearchUserInfoError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
