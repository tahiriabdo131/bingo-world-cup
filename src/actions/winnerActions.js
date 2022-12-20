import { API_URL } from '../config'
import axios from 'axios'
import { GET_WINNERS, ADD_TO_SELECTED, CLEAR_SELECTED_LIST, IS_BINGO, DELETE_WINNING_CONDITION } from './types'

// Get all winners
export const getWinners = () => async dispatch => {
    try {
        const res = await axios.get(`${API_URL}`);
        dispatch({
            type: GET_WINNERS,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}

// Add To selected winners
export const addtoSelected = index => async dispatch => {
    dispatch({
        type: ADD_TO_SELECTED,
        payload: index
    })
}

// Clear the selected List
export const clearSelectedListAction = () => async dispatch => {
    dispatch({
        type: CLEAR_SELECTED_LIST,
    })
}

// is Bingo
export const isBingoAction = (isBingo) => async dispatch => {
    dispatch({
        type: IS_BINGO,
        payload: isBingo
    })
}

// Delete winning condition
export const deleteWinningCondition = (list) => async dispatch => {
    dispatch({
        type: DELETE_WINNING_CONDITION,
        payload: list
    })
}


