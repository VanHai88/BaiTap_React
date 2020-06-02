import * as types from "../constants/ActionTypes"

var initialState = {
    todos: [],
    todoName: {
        id: "",
        name: ""
    }
    ,
    isLoading: true
}

var myReducer = (state = initialState, action) => {
    let index;
    switch (action.type) {
        case types.GET_LIST:
            return state
        case types.CREATE_TODO:
            state.todos.push(action.todo)
            return {
                todoName: state.todoName,
                todos: [...state.todos],
                isLoading: false
            }
        case types.GET_EDIT_ITEM:
            return {
                todos: [...state.todos],
                todoName: action.todo
                ,
                isLoading: false
            }
        case types.EDIT_TODO:
            index= state.todos.findIndex(value => value.id === action.todo.id)
            state.todos[index] = action.todo;
            return {
                todoName: {
                    id: "",
                    name: ""
                },
                todos: [...state.todos],
                isLoading: false
            }
            case types.DELETE_TODO:
                index= state.todos.findIndex(value => value.id === action.id)
                state.todos.splice(index,1)
                return {
                    todoName: {
                        id: "",
                        name: ""
                    },
                    todos: [...state.todos],
                    isLoading: false
                }
        default:
            return state
    }
}

export default myReducer;