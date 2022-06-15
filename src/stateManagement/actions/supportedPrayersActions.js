export const SET_SUPPORTED_PRAYERS = 'SET_SUPPORTED_PRAYERS';

export function setSupportedPrayers(prayers) {

    return { type: SET_SUPPORTED_PRAYERS, payload: prayers };

}
