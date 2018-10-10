import {FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE} from './test.types';

let initialState = {
    productSearchObject:{
        keywords:[]
    },

    productCatalog:[],
    error:null,
    loading:false
};


const products = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS: {
            return {
                ...state,
                loading:true,
                error:null,
                productSearchObject: {
                    ...state.productSearchObject,
                    keywords:action.payload
                }
            };
        }
        case FETCH_PRODUCTS_SUCCESS: {
            return {
                ...state,
                productCatalog:action.payload,
                loading:false,
                error:null
            };
        }
        case FETCH_PRODUCTS_FAILURE: {
            return {
                ...state,
                loading:false,
                error:action.error
            };
        }

        default:
            return state;
    }
};

export default products;