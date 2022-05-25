import { LOGIN_USER, LOGOUT_USER } from '../actions/authUserActions';

const INITIAL_STATE = {
    token: null,
    isAuthenticated: false,
}

const authUserReducer = (state = INITIAL_STATE, { type, payload }) => {

    switch (type) {
        case LOGIN_USER: return {
            ...state,
            isAuthenticated: true,
            token: payload.token,
        }

        case LOGOUT_USER: return {
            ...INITIAL_STATE
        }

        default: return state;
    }
}

export default authUserReducer;