import { GET_WINNERS, ADD_TO_SELECTED, CLEAR_SELECTED_LIST, IS_BINGO, DELETE_WINNING_CONDITION } from '../actions/types'
import { WINNING_CONDITIONS } from './winning_conditions'

const initalState = {
    winners: [],
    selctedIndexs: [],
    isBingo: false,
    winningConditions: [...WINNING_CONDITIONS],
}

const winnerReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_WINNERS:
            return {
                ...state,
                winners: action.payload.worldCupWinners,
            }
        case ADD_TO_SELECTED:
            if (state.selctedIndexs && !state.selctedIndexs.includes(action.payload)) {
                return {
                    ...state,
                    selctedIndexs: [...state.selctedIndexs, action.payload],
                }
            }
            else {
                return {
                    ...state
                }
            }
        case CLEAR_SELECTED_LIST:
            return {
                ...state,
                selctedIndexs: [],
                winningConditions: [...WINNING_CONDITIONS],
            }
        case IS_BINGO:
            return {
                ...state,
                isBingo: action.payload,
            }

        case DELETE_WINNING_CONDITION:
            let newConditions = state.winningConditions;
            let index = newConditions.indexOf(action.payload);
            if (index > -1) {
                newConditions.splice(index, 1);
            }
            return {
                ...state,
                winningConditions: newConditions,
            }
        default: { return state }
    }
}

export default winnerReducer;