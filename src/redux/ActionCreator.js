import {
  PAYLOAD_GET_REQUEST,
  PAYLOAD_GET_SUCCESS,
  PAYLOAD_GET_FAILURE,
} from "../redux/ActionType";
import axios from "axios";

export const payloadGetRequest = () => ({
  type: PAYLOAD_GET_REQUEST,
});

export const payloadGetSuccess = (payload) => ({
  type: PAYLOAD_GET_SUCCESS,
  payload,
});

export const payloadGetfailure = (payload) => ({
  type: PAYLOAD_GET_FAILURE,
  payload,
});

export const getPayloadData = () => (dispatch) => {
  dispatch(payloadGetRequest());
  return axios
    .get("https://api.spacexdata.com/v3/payloads")
    .then((res) => res.data)
    .then((res) => dispatch(payloadGetSuccess(res)))
    .catch((err) => dispatch(payloadGetfailure(err)));
};
