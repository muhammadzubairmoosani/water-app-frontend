import {
  SEND_NOTIFICATION,
  SEND_NOTIFICATION_SUCCESS,
  SEND_NOTIFICATION_FAILURE,
} from "../constants";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const notificationReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case SEND_NOTIFICATION:
      return {
        ...state,
        isLoading: true,
      };
    case SEND_NOTIFICATION_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    case SEND_NOTIFICATION_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    default:
      return state;
  }
};
