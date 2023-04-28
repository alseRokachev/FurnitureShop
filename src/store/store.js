import {combineReducers, createStore} from "@reduxjs/toolkit";
import basketReducers from './reducersBasket'

const rootReducer = combineReducers({
    reducers: basketReducers
})

export const store = createStore(rootReducer)