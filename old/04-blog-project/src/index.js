import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import reducers from "./reducers";
import promise from "redux-promise";
import PostsIndex from "./components/posts_index";
import PostsShow from "./components/posts_show";
import PostsNew from "./components/posts_new";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const dom = <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/posts/new" component={PostsNew}/>
                <Route path="/posts/:id" component={PostsShow}/>
                <Route path="/" component={PostsIndex}/>
            </Switch>
        </div>
    </BrowserRouter>
</Provider>;

ReactDOM.render(dom, document.getElementById('root'));
