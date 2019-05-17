import * as ActionTypes from './tictactoe.types';

let initialState = {
    v1: {
        loading: false,
        board: Array(9).fill('-'),
        next: 'O',
        active: false,
        scoreboard: {xWon: 0, draw: 0, oWon: 0},
        accuracy: 0,
        moves: []
    },
    v2: {
        loading: false,
        board: Array(9).fill('-'),
        next: 'O',
        active: false,
        scoreboard: {xWon: 0, draw: 0, oWon: 0},
        accuracy: 0,
        moves: []
    },
    v3: {
        loading: false,
        board: Array(9).fill('-'),
        next: 'O',
        active: false,
        scoreboard: {xWon: 0, draw: 0, oWon: 0},
        accuracy: 0,
        moves: []
    },
};

const tictactoe = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.PREDICT_MOVE_SUCCESS_V1:
        case ActionTypes.PLAYER_MOVE_V1:
            const m = {mark: state.v1.next, board: state.v1.board.join(''), move: action.payload.move};
            return {
                ...state,
                v1: {
                    ...state.v1,
                    board: state.v1.board.map((b, i) => i === action.payload.move ? state.v1.next : b),
                    moves: [...state.v1.moves, m],
                    next: state.v1.next === 'X' ? 'O' : 'X'
                }
            };
        case ActionTypes.START_GAME_V1:
            return {
                ...state, v1: {...state.v1, board: Array(9).fill('-'), active: true, moves: []}
            };
        case ActionTypes.STOP_GAME_X_WON_V1:
            return {
                ...state,
                v1: {
                    ...state.v1,
                    scoreboard: {...state.v1.scoreboard, xWon: state.v1.scoreboard.xWon + 1},
                    active: false
                }
            };
        case ActionTypes.STOP_GAME_O_WON_V1:
            return {
                ...state,
                v1: {
                    ...state.v1,
                    scoreboard: {...state.v1.scoreboard, oWon: state.v1.scoreboard.oWon + 1},
                    active: false
                }
            };
        case ActionTypes.STOP_GAME_DRAW_V1:
            return {
                ...state,
                v1: {
                    ...state.v1,
                    scoreboard: {...state.v1.scoreboard, draw: state.v1.scoreboard.draw + 1},
                    active: false
                }
            };
        case ActionTypes.GET_ACCURACY_SUCCESS_V1:
        case ActionTypes.TRAIN_NN_SUCCESS_V1:
            return {
                ...state, v1: {...state.v1, ...action.payload, loading: false}
            };
        case ActionTypes.TRAIN_NN_REQUEST_V1:
            return {
                ...state, v1: {...state.v1, loading: true}
            };
        case ActionTypes.TRAIN_NN_FAILURE_V1:
            return {
                ...state, v1: {...state.v1, loading: false}
            };

        case ActionTypes.PREDICT_MOVE_SUCCESS_V2:
        case ActionTypes.PLAYER_MOVE_V2:
            const m2 = {mark: state.v2.next, board: state.v2.board.join(''), move: action.payload.move};
            return {
                ...state,
                v2: {
                    ...state.v2,
                    board: state.v2.board.map((b, i) => i === action.payload.move ? state.v2.next : b),
                    moves: [...state.v2.moves, m2],
                    next: state.v2.next === 'X' ? 'O' : 'X'
                }
            };
        case ActionTypes.START_GAME_V2:
            return {
                ...state, v2: {...state.v2, board: Array(9).fill('-'), active: true, moves: []}
            };
        case ActionTypes.STOP_GAME_X_WON_V2:
            return {
                ...state,
                v2: {
                    ...state.v2,
                    scoreboard: {...state.v2.scoreboard, xWon: state.v2.scoreboard.xWon + 1},
                    active: false
                }
            };
        case ActionTypes.STOP_GAME_O_WON_V2:
            return {
                ...state,
                v2: {
                    ...state.v2,
                    scoreboard: {...state.v2.scoreboard, oWon: state.v2.scoreboard.oWon + 1},
                    active: false
                }
            };
        case ActionTypes.STOP_GAME_DRAW_V2:
            return {
                ...state,
                v2: {
                    ...state.v2,
                    scoreboard: {...state.v2.scoreboard, draw: state.v2.scoreboard.draw + 1},
                    active: false
                }
            };
        case ActionTypes.GET_ACCURACY_SUCCESS_V2:
        case ActionTypes.TRAIN_NN_SUCCESS_V2:
        case ActionTypes.TRAIN_BY_MOVES_SUCCESS_V2:
            return {
                ...state, v2: {...state.v2, ...action.payload, loading: false}
            };
        case ActionTypes.TRAIN_BY_MOVES_REQUEST_V2:
        case ActionTypes.TRAIN_NN_REQUEST_V2:
            return {
                ...state, v2: {...state.v2, loading: true}
            };
        case ActionTypes.TRAIN_BY_MOVES_FAILURE_V2:
        case ActionTypes.TRAIN_NN_FAILURE_V2:
            return {
                ...state, v2: {...state.v2, loading: false}
            };

        case ActionTypes.START_GAME_V3:
            return {
                ...state, v3: {...state.v3, board: Array(9).fill('-'), active: true, moves: []}
            };
        case ActionTypes.PREDICT_MOVE_SUCCESS_V3:
        case ActionTypes.UNBEAT_MOVE_SUCCESS_V3:
            const m3 = {mark: state.v3.next, board: state.v3.board.join(''), move: action.payload.move};
            return {
                ...state,
                v3: {
                    ...state.v3,
                    board: state.v3.board.map((b, i) => i === action.payload.move ? state.v3.next : b),
                    moves: [...state.v3.moves, m3],
                    next: state.v3.next === 'X' ? 'O' : 'X'
                }
            };

        case ActionTypes.STOP_GAME_X_WON_V3:
            return {
                ...state,
                v3: {
                    ...state.v3,
                    scoreboard: {...state.v3.scoreboard, xWon: state.v3.scoreboard.xWon + 1},
                    active: false
                }
            };
        case ActionTypes.STOP_GAME_O_WON_V3:
            return {
                ...state,
                v3: {
                    ...state.v3,
                    scoreboard: {...state.v3.scoreboard, oWon: state.v3.scoreboard.oWon + 1},
                    active: false
                }
            };
        case ActionTypes.STOP_GAME_DRAW_V3:
            return {
                ...state,
                v3: {
                    ...state.v3,
                    scoreboard: {...state.v3.scoreboard, draw: state.v3.scoreboard.draw + 1},
                    active: false
                }
            };
        // case ActionTypes.TRAIN_BY_MOVES_REQUEST_V3:
        case ActionTypes.TRAIN_NN_REQUEST_V3:
            return {
                ...state, v3: {...state.v3, loading: true}
            };
//        case ActionTypes.TRAIN_BY_MOVES_FAILURE_V3:
        case ActionTypes.TRAIN_NN_FAILURE_V3:
            return {
                ...state, v3: {...state.v3, loading: false}
            };
//        case ActionTypes.GET_ACCURACY_SUCCESS_V2:
        case ActionTypes.TRAIN_NN_SUCCESS_V3:
//        case ActionTypes.TRAIN_BY_MOVES_SUCCESS_V3:
            return {
                ...state, v3: {...state.v3, ...action.payload, loading: false}
            };        default:
            return state;
    }
};

export default tictactoe;
