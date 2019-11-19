import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import App2 from './App2';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import itemReducer from './Reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;
const store = createStore(itemReducer, composeEnhancers());


ReactDOM.render(
    <Provider store={store}>
        <App2 />
    </Provider>, document.getElementById('root'));