import axios from 'axios';
import API_FLASK from 'API_FLASK';
import * as ActionTypes from './tictactoe.types';

const api_version = 'v1.0';

export const predictMove = (board) => {
    return function (dispatch) {
        dispatch({type: ActionTypes.PREDICT_MOVE_REQUEST_V1});
        let data = new FormData();
        data.append('board', board);
        const config = {headers: {'Content-Type': 'multipart/form-data'}};
        axios({
            method: 'post',
            url: API_FLASK + '/' + api_version + '/move',
            data: data,
            config
        }).then(function (response) {
            dispatch({type: ActionTypes.PREDICT_MOVE_SUCCESS_V1, payload: response.data});
        }).catch(function (error) {
            dispatch({type: ActionTypes.PREDICT_MOVE_FAILURE_V1, error});
        });
    };
};

export const playerMove = (move) => {
    return function (dispatch) {
        dispatch({type: ActionTypes.PLAYER_MOVE_V1, payload: {move: move}});
    };
};

export const startGame = () => {
    return function (dispatch) {
        dispatch({type: ActionTypes.START_GAME_V1});
    };
};

export const stopGame = (winner, moves) => {
    return function (dispatch) {
        if (winner) {
            if (winner === 'X') {
                dispatch({type: ActionTypes.STOP_GAME_X_WON_V1});
            }
            else if (winner === 'O') {
                dispatch({type: ActionTypes.STOP_GAME_O_WON_V1});
            }
        } else {
            dispatch({type: ActionTypes.STOP_GAME_DRAW_V1});
        }
    };
};

export const getAccuracy = () => {
    return function (dispatch) {
        dispatch({type: ActionTypes.GET_ACCURACY_REQUEST_V1});
        axios({
            method: 'post',
            url: API_FLASK + '/' + api_version + '/accuracy'
        }).then(function (response) {
            dispatch({type: ActionTypes.GET_ACCURACY_SUCCESS_V1, payload: response.data});
        }).catch(function (error) {
            dispatch({type: ActionTypes.GET_ACCURACY_FAILURE_V1, error});
        });
    };
};

export const trainNN = () => {
    return function (dispatch) {
        dispatch({type: ActionTypes.TRAIN_NN_REQUEST_V1});
        axios({
            method: 'post',
            url: API_FLASK + '/' + api_version + '/train'
        }).then(function (response) {
            dispatch({type: ActionTypes.TRAIN_NN_SUCCESS_V1, payload: response.data});
        }).catch(function (error) {
            dispatch({type: ActionTypes.TRAIN_NN_FAILURE_V1, error});
        });
    };
};
