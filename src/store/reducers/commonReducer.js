import {
  CONTACT_US_IS_LOADING,
  CONTACT_US_SUCCESS,
  CONTACT_US_FAILURE,
} from "../contants";

const initialState = {
  contactUsIsLoading: false,
  contactUsSuccess: null,
  contactUsError: null,
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    ////////////////////////// CONTACT_US /////////////////////
    case CONTACT_US_IS_LOADING:
      return {
        ...state,
        contactUsIsLoading: true,
        contactUsSuccess: null,
        contactUsError: null,
      };

    case CONTACT_US_SUCCESS:
      return {
        ...state,
        contactUsIsLoading: false,
        contactUsSuccess: true,
        contactUsError: null,
      };

    case CONTACT_US_FAILURE:
      return {
        ...state,
        contactUsIsLoading: false,
        contactUsSuccess: null,
        contactUsError: action.error,
      };

    default:
      return state;
  }
}
