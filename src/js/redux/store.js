import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import test from './test/test.reducer';
import stickers from './stickers/stickers.reducer';
import tictactoe from './tictactoe/tictactoe.reducer';


const reducers = combineReducers({
    test,
    stickers,
    tictactoe
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(logger, thunk)));

export default store;