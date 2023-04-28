import React, {createRef, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const CardPay = ({setCard}) => {
    const [cardNumb, setCardNumb] = useState('')
    const [cardDate, setCardDate] = useState('')
    const [error, setError] = useState(false)
    const cardCvc = createRef()
    const basketItems = useSelector(state => state.reducers.basket)
    const cardNumbCheck = () => {
        setCardNumb(prevState => prevState.slice(0, 16))
    }
    const cardDateCheck = () => {
        setCardDate(prevState => prevState.slice(0, 4))
    }
    const cardCvcCheck = () => {
        cardCvc.current.value = cardCvc.current.value.slice(0, 3)
    }

    const cardDataCheck = () => {
        if (!isFinite(cardNumb)) {
            setError(true)
        }
        if (!isFinite(cardDate)) {
            setError(true)
        }
        if (!isFinite(cardCvc.current.value)) {
            setError(true)
        }
    }
    return (
        <div className={'w-full h-3/4 bg-slate-50 absolute top-14'}>
            <div className="flex flex-col items-center relative w-full h-full container">
                <img src="icons8-back-100.png" alt="" className={'w-10 absolute left-0 top-7 z-50 hover:cursor-pointer'}
                     onClick={() => setCard(false)}/>
                <p>{error ? <p style={{color: 'red'}}>invalid data</p> : ''}</p>
                <div className={'absolute w-full h-full flex flex-col items-center justify-center'}>
                    <div
                        className="rounded-xl max-w-5/6 max-h-60 bg-slate-950 h-full flex flex-col items-center justify-evenly text-slate-50 relative"
                        onClick={() => setError(false)}>
                        <input type="text"
                               className={'w-5/6 bg-transparent border border-slate-300 h-7 outline-amber-50 px-2'}
                               onInput={(event) => {
                                   setCardNumb(event.currentTarget.value)
                                   cardNumbCheck()
                               }} value={cardNumb} placeholder={'0000 0000 0000 0000'}/>
                        <div className="flex justify-between w-5/6 h-7 text-sm poppins">
                            <div className="relative w-1/4 h-full">
                                <input type="text"
                                       className={'w-full h-full bg-transparent border border-slate-300 text-center outline-amber-50'}
                                       onInput={(event) => {
                                           setCardDate(event.currentTarget.value)
                                           cardDateCheck()
                                       }} value={cardDate} placeholder={'05/25'}/>
                            </div>
                            <input type="text"
                                   className={'w-1/5 bg-transparent border border-slate-300 text-center outline-amber-50'}
                                   ref={cardCvc} onInput={() => cardCvcCheck()} placeholder={'000'}/>
                        </div>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MasterCard_logo.png/640px-MasterCard_logo.png"
                            alt="" className={'absolute right-2 bottom-0 w-12'}/>
                    </div>
                    <div className="mt-10">
                        <p>Total price : {basketItems.reduce((sum, item) => sum + item.item.price, 0)} $</p>
                    </div>
                </div>
                <div className="w-full flex justify-center absolute bottom-10">
                    <NavLink to={'/adress'}>
                        <button className={'w-44 bg-slate-950 z-40 h-10 rounded-xl text-slate-50'}
                                onClick={() => cardDataCheck()}>Next
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default CardPay;