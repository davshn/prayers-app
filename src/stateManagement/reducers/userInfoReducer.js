import { SET_USER_INFO } from '../actions/userInfoActions';

const INITIAL_STATE = {
    createdComments: 0,
    createdPrayers: 0,
    email: "",
    lastname: "",
    name: ""
}

const userInfoReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_USER_INFO: return {
            ...state,
            createdComments: payload.createdComments,
            createdPrayers: payload.createdPrayers,
            email: payload.email,
            lastname: payload.lastname,
            name: payload.name
        }

        default: return state;
    }
}

export default userInfoReducer;