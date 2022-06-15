import { SET_SUPPORTED_PRAYERS } from '../actions/supportedPrayersActions';

const INITIAL_STATE = {
    currentPage: 0,
    totalPages: 0,
    page: [],
}

const supportedPrayersReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_SUPPORTED_PRAYERS: return {
            ...state,
            totalPages: payload.totalPages,
            currentPage: payload.currentPage,
            page: payload.data
        }

        default: return state;
    }
}

export default supportedPrayersReducer;