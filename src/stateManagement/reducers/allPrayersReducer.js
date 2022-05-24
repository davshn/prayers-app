import { SET_ACTUAL_PAGE, SET_NEXT_PAGE, CHANGE_NEXT_PAGE } from '../actions/allPrayersActions';

const INITIAL_STATE = {
    currentPage: 0,
    totalPages: 0,
    actualPage: [],
    nextPage:[]
}

const allPrayersReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_ACTUAL_PAGE: return {
            ...state,
            totalPages: payload.totalPages,
            actualPage: payload.data,
        }
        
        case SET_NEXT_PAGE: return {
            ...state,
            nextPage: payload.data,
        }
        
        case CHANGE_NEXT_PAGE: return {
            ...state,
            actualPage: state.nextPage,
            currentPage: state.currentPage + 1,
            nextPage: payload.data
        }

        default: return state;
    }
}

export default allPrayersReducer;