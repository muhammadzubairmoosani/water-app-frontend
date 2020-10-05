import {
  IS_LOGGED_IN,
  IS_LOGGED_IN_SUCCESS,
  IS_LOGGED_IN_FAILURE,
} from "../contants";

const initialState = {
  isLoggedIn: null,
  isLoggedInLoader: false,
  isLoggedInError: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    ////////////////////////// SIGNIN /////////////////////
    case IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: null,
        isLoggedInLoader: true,
        isLoggedInError: null,
      };

    case IS_LOGGED_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.payload,
        isLoggedInLoader: false,
        isLoggedInError: null,
      };

    case IS_LOGGED_IN_FAILURE:
      return {
        ...state,
        isLoggedIn: null,
        isLoggedInLoader: false,
        isLoggedInError: action.error,
      };

    default:
      return state;
  }
}
