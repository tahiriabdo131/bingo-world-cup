import { combineReducers } from 'redux';
import winnerReducer from './winnerReducer';
export default combineReducers({
    winnerReducer: winnerReducer
})