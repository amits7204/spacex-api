import {
  PAYLOAD_GET_REQUEST,
  PAYLOAD_GET_SUCCESS,
  PAYLOAD_GET_FAILURE,
} from "../redux/ActionType";
export const initstate = {
  payloadData: [],
  isError: true,
};

const payloadReducer = (state = initstate, { type, payload }) => {
  // console.log(payload)
  switch (type) {
    case PAYLOAD_GET_REQUEST:
      return {
        ...state,
      };
    case PAYLOAD_GET_SUCCESS:
      return {
        ...state,
        payloadData: payload,
        isError: false,
      };
    case PAYLOAD_GET_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default payloadReducer;
