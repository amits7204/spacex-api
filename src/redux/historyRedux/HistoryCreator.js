import {
  HISTORY_GET_REQUEST,
  HISTORY_GET_SUCCESS,
  HISTORY_GET_FAUILER,
} from "../historyRedux/HistoryType";
import axios from "axios";

export const historyGetRequest = () => ({
  type: HISTORY_GET_REQUEST,
});

export const historyGetSuccess = (payload) => ({
  type: HISTORY_GET_SUCCESS,
  payload,
});

export const historyGetfailure = (payload) => ({
  type: HISTORY_GET_FAUILER,
  payload,
});

export const getHistoryData = () => (dispatch) => {
  dispatch(historyGetRequest());
  return axios
    .get("https://api.spacexdata.com/v3/history")
    .then((res) => res)
    .then((res) => dispatch(historyGetSuccess(res.data)))
    .catch((err) => dispatch(historyGetfailure(err)));
};
