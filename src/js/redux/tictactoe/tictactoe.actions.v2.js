import axios from 'axios';
import API_FLASK from 'API_FLASK';
import * as ActionTypes from './tictactoe.types';

const api_version = 'v2.0';

export const predictMove = (board) => {
    return function (dispatch) {
        dispatch({type: ActionTypes.PREDICT_MOVE_REQUEST_V2});
        let data = new FormData();
        data.append('board', board);
        const config = {headers: {'Content-Type': 'multipart/form-data'}};
        axios({
            method: 'post',
            url: API_FLASK + '/' + api_version + '/move',
            data: data,
            config
        }).then(function (response) {
            dispatch({type: ActionTypes.PREDICT_MOVE_SUCCESS_V2, payload: response.data});
        }).catch(function (error) {
            dispatch({type: ActionTypes.PREDICT_MOVE_FAILURE_V2, error});
        });
    };
};

export const playerMove = (move) => {
    return function (dispatch) {
        dispatch({type: ActionTypes.PLAYER_MOVE_V2, payload: {move: move}});
    };
};

export const startGame = () => {
    return function (dispatch) {
        dispatch({type: ActionTypes.START_GAME_V2});
    };
};

export const stopGame = (winner, moves) => {
    return function (dispatch) {
        if (winner) {
            if (winner === 'X') {
                dispatch({type: ActionTypes.STOP_GAME_X_WON_V2});
            }
            else if (winner === 'O') {
                dispatch({type: ActionTypes.STOP_GAME_O_WON_V2});
            }
        } else {
            dispatch({type: ActionTypes.STOP_GAME_DRAW_V2});
        }
        dispatch(trainByMoves(moves));
    };
};

export const getAccuracy = () => {
    return function (dispatch) {
        dispatch({type: ActionTypes.GET_ACCURACY_REQUEST_V2});
        axios({
            method: 'post',
            url: API_FLASK + '/' + api_version + '/accuracy'
        }).then(function (response) {
            dispatch({type: ActionTypes.GET_ACCURACY_SUCCESS_V2, payload: response.data});
        }).catch(function (error) {
            dispatch({type: ActionTypes.GET_ACCURACY_FAILURE_V2, error});
        });
    };
};

export const trainByMoves = (moves) => {
    return function (dispatch) {
        dispatch({type: ActionTypes.TRAIN_BY_MOVES_REQUEST_V2});
        const data = {mark: 'X', moves: moves};

        axios({
            method: 'post',
            url: API_FLASK + '/' + api_version + '/trainByMoves',
            data: data
        }).then(function (response) {
            dispatch({type: ActionTypes.TRAIN_BY_MOVES_SUCCESS_V2, payload: response.data});
        }).catch(function (error) {
            dispatch({type: ActionTypes.TRAIN_BY_MOVES_FAILURE_V2, error});
        });
    };
};

export const trainNN = () => {
    return function (dispatch) {
        dispatch({type: ActionTypes.TRAIN_NN_REQUEST_V2});
        axios({
            method: 'post',
            url: API_FLASK + '/' + api_version + '/train'
        }).then(function (response) {
            dispatch({type: ActionTypes.TRAIN_NN_SUCCESS_V2, payload: response.data});
        }).catch(function (error) {
            dispatch({type: ActionTypes.TRAIN_NN_FAILURE_V2, error});
        });
    };
};
