import axios from 'axios';
import API from 'API';
import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_SUCCESS
} from'./test.types';

export const fetchProducts = (searchObject) => {
    return function (dispatch) {
        dispatch({type: FETCH_PRODUCTS});
        axios.post(
            API + '/products/fetchProducts', searchObject)
            .then(function (response) {
                dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: response.data});
            })
            .catch(function (error) {
                dispatch({type: FETCH_PRODUCTS_FAILURE, error});
            });
    }
};