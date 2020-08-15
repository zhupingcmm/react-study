import {createStore} from "redux";


const toutiaoProcessor = (state, action) => {
    const {type,data} = action;
	if (action.type === 'PUSH_LIST') {
		return {
			...state,
			list: state.list.concat(action.data)
		}
    }
    // switch(type){
    //     case "PUSH_LIST":
    //         const list = state.list.concat(data);
    //         console.log("list:::::",list)
    //         state.list = list;
    //         break;
    // }
	return state;

}

const store = createStore(toutiaoProcessor,{list:[]});

export default store;