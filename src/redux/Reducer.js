import {
  CONTACTS_GET_REQUEST,
  CONTACTS_GET_SUCCESS,
  CONTACTS_GET_FAILURE,
  CONTACTS_POST_REQUEST,
  CONTACTS_POST_SUCCESS,
  CONTACTS_POST_FAILURE,
} from "../redux/ActionType";
export const initstate = {
  contactData: [],
  isError: true,
  data: {}
};

const contactReducer = (state = initstate, { type, payload }) => {
  console.log("payload: ",payload)
  switch (type) {
    case CONTACTS_GET_REQUEST:
      return {
        ...state,
      };
    case CONTACTS_GET_SUCCESS:
      return {
        ...state,
        contactData: payload,
        isError: false,
      };
    case CONTACTS_GET_FAILURE:
      return {
        ...state,
      };
      case CONTACTS_POST_REQUEST:
        return {
          ...state,
        };
      case CONTACTS_POST_SUCCESS:
        return {
          ...state,
          data: payload,
          isError: false,
        };
      case CONTACTS_POST_FAILURE:
        return {
          ...state,
        };  
    default:
      return state;
  }
};

export default contactReducer;
