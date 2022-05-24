import { combineReducers } from 'redux';
import createSecureStore from "redux-persist-expo-securestore";
import { persistReducer } from 'redux-persist';

import authUserReducer from './authUserReducer';
import userInfoReducer from './userInfoReducer';
import allPrayersReducer from './allPrayersReducer';

const storage = createSecureStore();

const persistConfig = {
    key: 'root',
    storage: storage,
}

export default combineReducers({
    authUserReducer: persistReducer(persistConfig, authUserReducer),
    userInfoReducer,
    allPrayersReducer
})