import * as Types from './stickers.types';

let initialState = {
    counter: 0
};


const stickers = (state = initialState, action) => {
    switch (action.type) {
        case Types.ITERATE_SUCCESS: {
            return {
                ...state,
                counter: state.counter + action.payload
            };
        }
        default:
            return state;
    }
};

export default stickers;