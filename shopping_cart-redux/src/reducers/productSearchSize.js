import * as types from "../constants/ActionTypes"

var initialState = ["XS"];

var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.SEARCH_SIZE:
            var index = state.indexOf(action.size)
            if(index === -1){
                state.push(action.size)
            }else{
                state.splice(index, 1)
            }
            return [...state]
        default: 
            return state
    }
}

export default myReducer

