import * as ActionTypes from './tictactoe.types'

let initialState = {
    loading: false,
    board: Array(9).fill(' '),
    next: 'O',
    active: false,
    scoreboard: {xWon: 0, draw: 0, oWon: 0},
    accuracy: 0
};

const getBoardWithMove = (state, move) => {
    let board = {...state.board};
    board[move] = state.next;
    return Object.values(board);
};

const tictactoe = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.PREDICT_MOVE_SUCCESS:
        case ActionTypes.PLAYER_MOVE:
            return {
                ...state, board: getBoardWithMove(state, action.payload.move), next: state.next === 'X' ? 'O' : 'X'
            };
        case ActionTypes.START_GAME:
            return {
                ...state, board: Array(9).fill(' '), active: true
            };
        case ActionTypes.STOP_GAME_X_WON:
            return {
                ...state, scoreboard: {...state.scoreboard, xWon: state.scoreboard.xWon + 1}, active: false
            };
        case ActionTypes.STOP_GAME_O_WON:
            return {
                ...state, scoreboard: {...state.scoreboard, oWon: state.scoreboard.oWon + 1}, active: false
            };
        case ActionTypes.STOP_GAME_DRAW:
            return {
                ...state, scoreboard: {...state.scoreboard, draw: state.scoreboard.draw + 1}, active: false
            };
        case ActionTypes.GET_ACCURACY_SUCCESS:
        case ActionTypes.TRAIN_NN_SUCCESS:
            return {
                ...state, ...action.payload, loading: false
            };
        case ActionTypes.TRAIN_NN_REQUEST:
            return {
                ...state, loading: true
            };
        case ActionTypes.TRAIN_NN_FAILURE:
            return {
                ...state, loading: false
            };
        default:
            return state;
    }
};

export default tictactoe;