import produce from "immer";

export const initialState = {
  loadSearchUserInfoLoading: false,
  loadSearchUserInfoDone: false,
  loadSearchUserInfoError: null,
  searchUserInfo: null,
  loadSearchUserSasaHistoryLoading: false,
  loadSearchUserSasaHistoryDone: false,
  loadSearchUserSasaHistoryError: null,
  searchUserSasaHistory: null,
};

export const LOAD_SEARCH_USER_INFO_REQUSET = "LOAD_SEARCH_USER_INFO_REQUSET";
export const LOAD_SEARCH_USER_INFO_DONE = "LOAD_SEARCH_USER_INFO_DONE";
export const LOAD_SEARCH_USER_INFO_ERROR = "LOAD_SEARCH_USER_INFO_ERROR";

export const LOAD_SEARCH_USER_SASA_HISTORY_REQUSET = "LOAD_SEARCH_USER_SASA_HISTORY_REQUSET";
export const LOAD_SEARCH_USER_SASA_HISTORY_DONE = "LOAD_SEARCH_USER_SASA_HISTORY_DONE";
export const LOAD_SEARCH_USER_SASA_HISTORY_ERROR = "LOAD_SEARCH_USER_SASA_HISTORY_ERROR";

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

      case LOAD_SEARCH_USER_SASA_HISTORY_REQUSET:
        draft.loadSearchUserSasaHistoryLoading = true;
        draft.loadSearchUserSasaHistoryError = null;
        draft.loadSearchUserSasaHistoryDone = false;
        break;
      case LOAD_SEARCH_USER_SASA_HISTORY_DONE:
        draft.loadSearchUserSasaHistoryLoading = false;
        draft.searchUserSasaHistory = action.data;
        draft.loadSearchUserSasaHistoryDone = true;
        break;
      case LOAD_SEARCH_USER_SASA_HISTORY_ERROR:
        draft.loadSearchUserSasaHistoryLoading = false;
        draft.loadSearchUserSasaHistoryError = action.error;
        break;

      default:
        break;
    }
  });
};

export default reducer;
