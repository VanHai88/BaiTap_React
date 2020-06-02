import * as types from "../constants/ActionTypes"

export const getSize = () =>{
    return{
        type: types.GET_SIZE
    }
}

export const searchSize = (size) =>{
    return{
        type: types.SEARCH_SIZE,
        size
    }
}

export const getProduct = (products)=>{
    return{
        type: types.GET_PRODUCT,
        products
    }
}

export const addCart = (product)=>{
    return{
        type: types.ADD_CART,
        product
    }
}

export const deleteCart = (id)=>{
    return{
        type: types.DELETE_PRODUCT_CART,
        id
    }
}

export const sortPrice = (value)=>{
    return{
        type: types.SORT_PRICE,
        value
    }
}