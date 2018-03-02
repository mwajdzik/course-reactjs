import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import ReduxPromise from "redux-promise";

import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const dom = <Provider store={createStoreWithMiddleware(reducers)}><App/></Provider>;

ReactDOM.render(dom, document.getElementById('root'));
