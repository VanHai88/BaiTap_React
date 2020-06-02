import * as types from "../constants/ActionTypes"

var initialState = [];

var myReducer = (state = initialState, action) => {
    var itemIdex
    switch (action.type) {
        case types.ADD_CART:
            itemIdex = state.findIndex(value => value.id === action.product.id);
            if (itemIdex === -1) {
                state.push(action.product)
            } else {
                state[itemIdex].count = state[itemIdex].count + 1;
            }
            return [...state]
        case types.DELETE_PRODUCT_CART:
            itemIdex = state.findIndex(value => value.id === action.id);
            state.splice(itemIdex,1);
            return [...state]
        default:
            return state
    }
}

export default myReducer

