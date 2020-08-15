import React from "react";
import ReactDOM from "react-dom";
import App from "./toutiao";
import store from "./toutiao/store";
// import {Provider} from "react-redux";
import {Provider} from "../react-redux-fake";
import AppContainer from "./toutiao/router";
ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
)