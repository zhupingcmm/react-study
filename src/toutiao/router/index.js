import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {History, Detail} from "../pages";
import App from "../index";
import React,{useEffect,useState,lazy,Suspense} from "react";

const LazyComponent = lazy(()=>import("../../code-spliting"));

export default function AppContainer(){

    return (
        <Router>
            <Switch>
                <Route path="/history" component={History}/>
                <Route path="/detail/:id" component={Detail}/>
                <Route path="/setting" render={()=>{
                    return(<Suspense fallback={<div>loading ...</div>}>
                        <LazyComponent />
                    </Suspense>)
                }}/>

                <Route path="/" component={App}/>
            </Switch>

        </Router>
    )

}