import React,{useEffect,useState} from "react";
import List from "./list";
import * as Pages from "./components";
// import {connect} from "react-redux";
// import store from "./store";

import {connect} from "../../react-redux-fake";

function App(props){
    useEffect(()=>{
        reactiveList();
    },[])

    function getList () {
        return fetch('http://localhost:3001/list')
                .then(res=>res.json())
    }

    function updateList (){
        console.log("props:::",props)
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

    console.log("props list:: ",props)

    return(
        <div>
            <List
                dataSource={props.list}
                renderItem={item=>{
                    const {type, data} = item;
                    const ItemComponent = Pages[type];
                    return <ItemComponent data={data} />
                }}
            />
        </div>
    )
}


function mapStateToProps(state){
    console.log("state::",state)

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