import React,{useEffect,useState,lazy,Suspense} from "react";
import List from "./list";
import * as Pages from "./components";
// import {connect} from "react-redux";
// import store from "./store";
import {Link, Route} from "react-router-dom";

import {connect} from "../../react-redux-fake";

const LazyComponent = lazy(()=>import("../code-spliting"));

function App(props){
    useEffect(()=>{
        reactiveList();
    },[])

    function getList () {
        return fetch('http://localhost:3001/list')
                .then(res=>res.json())
    }

    function updateList (){
        getList().then(({data})=>{
            props.listUpdate({
                type:"PUSH_LIST",
                data
            })
        });
    }

    const reactiveList = () => {
        updateList()
        window.onscroll = () => {
            updateList()
        }
    }

    function skip(){
        console.log("skip======");
        console.log("props",props);
        props.history.push('/detail/' + "i6727634212259643910",{'ab':1});
    }

    return(
        <div>
            <div>
                <div>
                    推薦視頻
                    <Link to="/setting">+</Link>
                </div>
            </div>
            <List
                dataSource={props.list}
                renderItem={item=>{
                    const {type, data} = item;
                    const ItemComponent = Pages[type];
                    return <ItemComponent
                            onClick={skip} 
                            data={data}/>
                }}
            />
        </div>
    )
}


function mapStateToProps(state){
    return {
        list: state.list
    }

}

function mapDispatchToProps(dispatch){

    return {
        listUpdate: task=>{
            dispatch(task);
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(App);