//import React from 'react';
import { legacy_createStore as createStore} from 'redux'

const initialState={
    balance:0,
    fullname:"",
    mobile:null
}

function accountReducer(state=initialState,action){
    switch(action.type){
        case "deposit":
            return{...state, balance:state.balance+action.payload}
        case "withDraw":
            return{...state, balance:state.balance-action.payload}
        case "mobileUpdate":
            return{...state, mobile:action.payload}
        case "nameUpdate":
            return{...state, fullname:action.payload}
        default:
            return state
    }
}

const store = createStore(accountReducer)
console.log(store.getState())
store.dispatch({type:"deposit",payload:1000})
console.log(store.getState())
store.dispatch({type:"withDraw",payload:300})
console.log(store.getState())