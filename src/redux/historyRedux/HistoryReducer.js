import {
  HISTORY_GET_REQUEST,
  HISTORY_GET_SUCCESS,
  HISTORY_GET_FAUILER,
} from "../historyRedux/HistoryType";
export const initstate = {
  historyData: [],
  isError: true,
};

const historyReducer = (state = initstate, { type, payload }) => {
  // console.log(payload)
  switch (type) {
    case HISTORY_GET_REQUEST:
      return {
        ...state,
      };
    case HISTORY_GET_SUCCESS:
      return {
        ...state,
        historyData: payload,
        isError: false,
      };
    case HISTORY_GET_FAUILER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default historyReducer;
