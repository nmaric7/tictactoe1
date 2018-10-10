import axios from 'axios';
import API_FLASK from 'API_FLASK';
import * as ActionTypes from './tictactoe.types';

export const predictMove = (board) => {
    return function (dispatch) {
        dispatch({type: ActionTypes.PREDICT_MOVE_REQUEST});
        // const body = JSON.stringify({board: board});
        let data = new FormData();
        data.append('board', board);
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        axios({
            method: 'post',
            url: API_FLASK + '/move',
            data: data,
            config
        }).then(function (response) {
                dispatch({type: ActionTypes.PREDICT_MOVE_SUCCESS, payload: response.data});
            })
            .catch(function (error) {
                dispatch({type: ActionTypes.PREDICT_MOVE_FAILURE, error});
            });
    }
};

export const playerMove = (move) => {
    return function (dispatch) {
        dispatch({type: ActionTypes.PLAYER_MOVE, payload: {move: move}});
    }
};

export const startGame = () => {
    return function (dispatch) {
        dispatch({type: ActionTypes.START_GAME});
    }
};

export const stopGame = (winner) => {
    return function (dispatch) {
        if (winner) {
            if (winner === 'X') dispatch({type: ActionTypes.STOP_GAME_X_WON});
            else if (winner === 'O') dispatch({type: ActionTypes.STOP_GAME_O_WON});
        } else {
            dispatch({type: ActionTypes.STOP_GAME_DRAW});
        }
    }
};

export const getAccuracy = () => {
    return function (dispatch) {
        dispatch({type: ActionTypes.GET_ACCURACY_REQUEST});
        axios({
            method: 'post',
            url: API_FLASK + '/accuracy'
        }).then(function (response) {
            dispatch({type: ActionTypes.GET_ACCURACY_SUCCESS, payload: response.data});
        })
            .catch(function (error) {
                dispatch({type: ActionTypes.GET_ACCURACY_FAILURE, error});
            });
    }
};

export const trainNN = () => {
    return function (dispatch) {
        dispatch({type: ActionTypes.TRAIN_NN_REQUEST});
        axios({
            method: 'post',
            url: API_FLASK + '/train'
        }).then(function (response) {
            dispatch({type: ActionTypes.TRAIN_NN_SUCCESS, payload: response.data});
        })
            .catch(function (error) {
                dispatch({type: ActionTypes.TRAIN_NN_FAILURE, error});
            });
    }
};