import {combineReducers} from 'redux'
import getList from './todoList'
import searchTodo from "./searchTodo"

const myReducer = combineReducers({
    getList,
    searchTodo
})

export default myReducer;