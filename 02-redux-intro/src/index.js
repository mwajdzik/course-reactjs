import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);
const dom = <Provider store={createStoreWithMiddleware(reducers)}><App/></Provider>;

ReactDOM.render(dom, document.getElementById('root'));
