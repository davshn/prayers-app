import { SET_OWN_PRAYERS } from '../actions/ownPrayersActions';

const INITIAL_STATE = {
    currentPage: 0,
    totalPages: 0,
    page: [],
}

const ownPrayersReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_OWN_PRAYERS: return {
            ...state,
            totalPages: payload.totalPages,
            currentPage: payload.currentPage,
            page: payload.data
        }

        default: return state;
    }
}

export default ownPrayersReducer;