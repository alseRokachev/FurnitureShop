import {createSlice} from "@reduxjs/toolkit";


const basketReducers = createSlice({
    name: 'Basket Reducers',
    initialState: {
        basket: []
    },
    reducers: {
        addToBasket(state, action) {
            state.basket.push({
                item :action.payload,
                addTime: Date.now()
            })
        },
        removeFromBasket(state, action) {
            state.basket = state.basket.filter(item => item.addTime !== action.payload.addTime)
        }
    }
})

export default basketReducers.reducer;
export const {addToBasket, removeFromBasket} = basketReducers.actions;