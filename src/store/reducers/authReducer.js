import {
    // SIGNUP,
    // SIGNUP_FAILURE,
    // SIGNUP_SUCCESS,
    // SIGNIN,
    // SIGNIN_SUCCESS,
    // SIGNIN_FAILURE,
    // LOGOUT,
    // LOGOUT_SUCCESS,
    // LOGOUT_FAILURE,
    ROUT_GUARD
} from "../constants";

export const authInitialState = {
    user: null,
    isAuthenticated: false
};

export const authReducer = (state = authInitialState, action) => {
    switch (action.type) {
        case ROUT_GUARD:
            return {
                ...state,
                isAuthenticated: action.payload
            }
        default:
            return state;
    }
}