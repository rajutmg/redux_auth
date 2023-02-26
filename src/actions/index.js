import axios from "axios";
import { AUTH_ERROR, AUTH_USER } from "./types";
export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://truly-contacts.herokuapp.com/api/auth/register",
      {
        formProps,
      }
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
    callback();
  }
};

export const signout = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: "",
  };
};

export const signin = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://truly-contacts.herokuapp.com/api/auth/login",
      {
        formProps,
      }
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid Login Credentials" });
  }
};
