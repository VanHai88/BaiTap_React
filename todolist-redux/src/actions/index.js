import * as types from "../constants/ActionTypes"

export const getList = () =>{
    return{
        type: types.GET_LIST
    }
}

export const createTodo = (todo)=>{
    return{
        type: types.CREATE_TODO,
        todo
    }
}

export const getEditItem = (todo) =>{
    return{
        type: types.GET_EDIT_ITEM,
        todo
    }
}

export const editTodo = (todo) =>{
    return{
        type: types.EDIT_TODO,
        todo
    }
}

export const deleteTodo = (id)=>{
    return{
        type: types.DELETE_TODO,
        id
    }
}

export const searchTodo = (keyWord)=>{
    return{
        type: types.SEARCH_TODO,
        keyWord
    }
}