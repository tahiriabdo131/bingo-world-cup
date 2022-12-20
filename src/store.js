import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/combineReducers';
import thunk from "redux-thunk"

const enhancers = compose(
    applyMiddleware(thunk), window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);
const initialState = {};
const store = createStore(rootReducer, initialState, enhancers);
export default store;