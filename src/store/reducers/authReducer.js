const initialState = {
  signIn: null,
  signInLoader: false,
  signInError: null,

  isLoggedIn: false,
  isLoggedInLoader: false,
  isLoggedInError: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    ////////////////////////// SIGNIN /////////////////////
    case "SIGNIN":
      return {
        ...state,
        signIn: null,
        signInLoader: true,
        signInError: null,
      };

    case "SIGNIN_SUCCESS":
      return {
        ...state,
        signIn: action.payload,
        signInLoader: false,
        signInError: null,

        isLoggedIn: true,
        isLoggedInLoader: false,
        isLoggedInError: null,
      };

    case "SIGNIN_FAILURE":
      return {
        ...state,
        signIn: null,
        signInLoader: false,
        signInError: action.error,
      };

      default:
      return state;
  }
}
