import React from 'react';
import {useDispatch} from "react-redux";
import {addToBasket} from "../../../store/reducersBasket";

const Item = ({data, item, setCard, setCardData}) => {
    const dispatch = useDispatch()
    return (
        <div className={`w-80 h-96 flex flex-col items-center bg-slate-100 rounded-xl mb-16 relative item`}>
            <img src={data.img} alt="data error" className={'w-full rounded-t-xl mb-4 h-56'}/>
            <p className={'poppins mb-1 text-xl'}>{data.name}</p>
            <p className={'poppins text-base text-slate-500'}>{data.price} $</p>
            <p onClick={() => {
                setCard(true)
                setCardData(item)
            }} className={'poppins mt-8 hover:cursor-pointer'}>See more</p>
            <button
                className={'rounded-full bg-neutral-300 w-10 h-10 absolute right-5 bottom-5 font-bold text-lg flex justify-center items-center active:bg-neutral-400 duration-500'}
                onClick={() => dispatch(addToBasket(item))}>
                <img
                    src="icons8-plus-math-100.png" alt="" className={'w-1/3 h-1/3'}/></button>
        </div>
    );
};

export default Item;