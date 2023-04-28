import React from 'react';
import {useSelector} from "react-redux";

const BasketBtn = () => {
    const basketItems = useSelector(state => state.reducers.basket)
    return (
        <div className={'fixed right-10 bottom-5 w-16 h-16 basket_btn z-40'}>
            {basketItems.length > 0 && (
                <div className={'w-6 h-6 bg-neutral-400 absolute right-0 rounded-full flex items-center justify-center poppins basket_counter'}><p>{basketItems.length}</p></div>
            )}
            <button
                className="bg-neutral-300 rounded-full flex items-center justify-center h-full w-full active:bg-neutral-400 duration-300 shadow-sm shadow-slate-950">
                <img src="icons8-shopping-cart-100.png" alt="" className={'w-1/2 h-1/2'}/>
            </button>
        </div>
    );
};

export default BasketBtn;