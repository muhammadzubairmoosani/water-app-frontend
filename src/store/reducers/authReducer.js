import {
  LOGGED_IN_IS_LOADING,
  LOGGED_IN_SUCCESS,
  LOGGED_IN_FAILURE,
  SIGN_UP_IS_LOADING,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "../contants";

const initialState = {
  user: null,
  loggedInIsLoader: false,
  loggedInSuccess: false,
  loggedInError: null,

  signUpIsLoader: false,
  signUpSuccess: false,
  signUpError: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    ////////////////////////// SIGN_IN /////////////////////
    case LOGGED_IN_IS_LOADING:
      return {
        ...state,
        user: null,
        loggedInIsLoader: true,
        loggedInSuccess: false,
        loggedInError: null,
      };

    case LOGGED_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedInIsLoader: false,
        loggedInSuccess: true,
        loggedInError: null,
      };

    case LOGGED_IN_FAILURE:
      return {
        ...state,
        user: null,
        loggedInIsLoader: false,
        loggedInSuccess: false,
        loggedInError: action.error,
      };

    ////////////////////////// SIGN_UP /////////////////////
    case SIGN_UP_IS_LOADING:
      return {
        ...state,
        signUpIsLoader: true,
        signUpSuccess: false,
        signUpError: null,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpIsLoader: false,
        signUpSuccess: true,
        signUpError: null,
      };

    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpIsLoader: false,
        signUpSuccess: false,
        signUpError: action.error,
      };

    default:
      return state;
  }
}
