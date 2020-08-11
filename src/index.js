import React from "react";
import ReactDOM from "react-dom";
import App from "./toutiao";
import store from "./toutiao/store";
// import {Provider} from "react-redux";
import {Provider} from "../react-redux-fake";
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)