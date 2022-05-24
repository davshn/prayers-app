export const SET_ACTUAL_PAGE = 'SET_ACTUAL_PAGE';
export const SET_NEXT_PAGE = 'SET_NEXT_PAGE';
export const CHANGE_NEXT_PAGE = 'CHANGE_NEXT_PAGE';

export function setActualPage(prayers) {

    return { type: SET_ACTUAL_PAGE, payload: prayers };

}

export function setNextPage(prayers) {

    return { type: SET_NEXT_PAGE, payload: prayers };

}

export function changeNextPage(prayers) {

    return { type: CHANGE_NEXT_PAGE, payload: prayers };

}

