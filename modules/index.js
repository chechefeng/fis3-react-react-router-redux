/**
 * Created by lpw on 2018/3/22.
 */
import React from 'react'
import {render} from 'react-dom'
import Router from "./router/router"
import {hashHistory} from 'react-router';
import rootReducer from "./rootReducer/index"
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(rootReducer,applyMiddleware());
import "./css/style.less"
render(
    <Provider store={store}>
        <Router history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)