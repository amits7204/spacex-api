import {
  CONTACTS_GET_REQUEST,
  CONTACTS_GET_SUCCESS,
  CONTACTS_GET_FAILURE,
  CONTACTS_POST_REQUEST,
  CONTACTS_POST_SUCCESS,
  CONTACTS_POST_FAILURE,
} from "../redux/ActionType";
import axios from "axios";

export const contactGetRequest = () => ({
  type: CONTACTS_GET_REQUEST,
});

export const contactGetSuccess = (payload) => ({
  type: CONTACTS_GET_SUCCESS,
  payload,
});

export const contactGetfailure = (payload) => ({
  type: CONTACTS_GET_FAILURE,
  payload,
});

export const contactPostRequest = () => ({
  type: CONTACTS_POST_REQUEST,
});

export const contactPostSuccess = (payload) => ({
  type: CONTACTS_POST_SUCCESS,
  payload,
});

export const contactPostfailure = (payload) => ({
  type: CONTACTS_POST_FAILURE,
  payload,
});


export const getContactData = () => (dispatch) => {
  dispatch(contactGetRequest());
  return axios
    .get("https://amit-contacts.herokuapp.com/contacts")
    .then((res) => res)
    .then((res) => dispatch(contactGetSuccess(res.data)))
    .catch((err) => dispatch(contactGetfailure(err)));
};

export const postContactData = (payload) => (dispatch) => {
  const {phone_number, message} = payload
  dispatch(contactPostRequest());
  return axios
    .post("http://localhost:8080/users/",{
      phone_number: phone_number,
      message: message  
    })
    .then((res) => res)
    .then((res) => dispatch(contactPostSuccess(res.data)))
    .catch((err) => dispatch(contactPostfailure(err)));
};


// cDadpVxjc-yu0Fgo1LvHYJ4aMQhnWuzPFrHjVvT4