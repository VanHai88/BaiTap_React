import * as types from "../constants/ActionTypes"

var initialState = [
    {
        id: 1,
        transportation: "Free shipping",
        img: './images/img1.jpg',
        name: "AO SOMI W2SMD010019",
        price: 2,
        discount: [5,1.25],
        size: ["XS","M","XL"],
        count: 1
    },
    {
        id: 2,
        transportation: "Free shipping",
        img: './images/img2.jpg',
        name: "DAM NU W2DAM030002",
        price: 20.50,
        discount: [10,5.25],
        size: ["XS","S","XL"],
        count: 1
    },
    {
        id: 3,
        transportation: "Free shipping",
        img: './images/img3.jpg',
        name: "DAM NU DNG039003PK",
        price: 15.90,
        discount: [8,6.25],
        size: ["S","M","XLL"],
        count: 1
    },
    {
        id: 4,
        transportation: "Free shipping",
        img: './images/img4.jpg',
        name: "AO THUN W2ATN030008",
        price: 8.90,
        discount: [6,2.25],
        size: ["XS","S","M","XL"],
        count: 1
    },
    {
        id: 5,
        transportation: "Free shipping",
        img: './images/img5.jpg',
        name: "AO SOMI W2SMD01068",
        price: 20.90,
        discount: [4,1.25],
        size: ["XS","S","M","ML","XL"],
        count: 1
    },
    {
        id: 6,
        transportation: "Free shipping",
        img: './images/img6.jpg',
        name: "DAM NU DNG039003PK88",
        price: 30.90,
        discount: [10,15.25],
        size: ["M","XL"],
        count: 1
    },
    {
        id: 7,
        transportation: "Free shipping",
        img: './images/img7.jpg',
        name: "AO SOMI W2SMD010020",
        price: 15.00,
        discount: [4,5.25],
        size: ["XS","M","XL"],
        count: 1
    },
    {
        id: 8,
        transportation: "Free shipping",
        img: './images/img8.jpg',
        name: "DAM NU DNG039003PSA",
        price: 20.80,
        discount: [9,8.25],
        size: ["XS","M","L"],
        count: 1
    }
];

var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.GET_PRODUCT:
            return state
        default: 
            return state
    }
}

export default myReducer

