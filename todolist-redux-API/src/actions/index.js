import * as types from "../constants/ActionTypes"
import axios from "axios"
import * as urls from "../constants/UrlTypes"



export const getList = () => {
    return dispatch => {
        dispatch(getListStarted())
        axios.get(urls.URL)
            .then(res => {
                dispatch(getListSusses(res.data))
            })
    }
}

export function getListStarted() {
    return {
        type: types.GET_LIST_STARTED
    }
}

export function getListSusses(todoList) {
    return {
        type: types.GET_LIST,
        todoList
    }
}

export const createTodo = (todo) => {
    return dispatch => {
        axios.post(urls.URL, todo)
            .then(res => {
                dispatch(createTodoSusses(res.data))
            })
    }
}

export function createTodoSusses(todo) {
    return {
        type: types.CREATE_TODO,
        todo
    }
}

export const getEditItem = (todo) => {
    return {
        type: types.GET_EDIT_ITEM,
        todo
    }
}

export const editTodo = (todo) => {
    return dispatch => {
        axios.put(urls.URL+todo.id, todo)
            .then(res => {
                dispatch(editTodoSusses(res.data))
            })
    }
}

function editTodoSusses(todo) {
    return {
        type: types.EDIT_TODO,
        todo
    }
}

export const deleteTodo = id=> {
    return dispatch =>{
        axios.delete(urls.URL+id)
        .then(res => {
            dispatch({
                type: types.DELETE_TODO,
                id: res.data.id
            })
        })
    }
}

export const searchTodo = (keyWord) => {
    return {
        type: types.SEARCH_TODO,
        keyWord
    }
}