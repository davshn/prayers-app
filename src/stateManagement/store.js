import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers/combineReducers';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

export const store = createStore(
    rootReducers, applyMiddleware(thunk)
)
export const persistor = persistStore(store);
