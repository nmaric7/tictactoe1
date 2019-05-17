import axios from 'axios';
import API from 'API';
import * as Types from'./stickers.types';

export const iterate = (ascending) => {
    return function (dispatch) {
        dispatch({type: Types.ITERATE_REQUEST});
        const params = {'ascending': ascending};

        axios.post(
            API + '/stickers/iterate', params)
            .then(function (response) {
                console.log(response);
                dispatch({type: Types.ITERATE_SUCCESS, payload: response.data.iterate});
            })
            .catch(function (error) {
                dispatch({type: Types.ITERATE_FAILURE, error});
            });

    };
};

export const auth = (params) => {
    return function (dispatch) {
        dispatch({type: Types.AUTH_REQUEST});

        axios.post(
            API + '/auth/v1', params)
            .then(function (response) {
                console.log(response);
                dispatch({type: Types.AUTH_SUCCESS, payload: response.data.token});
            })
            .catch(function (error) {
                dispatch({type: Types.AUTH_FAILURE, error});
            });

    };
};