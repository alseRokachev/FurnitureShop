import React, {useState} from 'react';
import CardPay from "../../jsx/Payment/cardPay";
import CashPay from "../../jsx/Payment/cashPay";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Order = () => {
    const [card, setCard] = useState(false)
    const [cash, setCash] = useState(false)
    const [bit, setBit] = useState(false)
    return (
        <div className={'flex flex-col items-center justify-center poppins container mt-14'}>
            {!card & !cash & !bit && (
                <NavLink to={'/catalogue'}>
                    <img src="icons8-back-100.png" alt=""
                         className={'w-10 absolute top-16 left-0 z-50 hover:cursor-pointer'}
                         onClick={() => setCard(false)}/>
                </NavLink>
            )}
            <div
                className="border border-neutral-300 w-3/4 h-24 rounded-xl mt-8 italic text-4xl flex items-center justify-center bg-neutral-100 hover:cursor-pointer"
                onClick={() => setCard(true)}>Visa
            </div>
            <div
                className="border border-neutral-300 w-3/4 h-24 rounded-xl mt-8 text-4xl flex items-center justify-center bg-neutral-100 hover:cursor-pointer"
                onClick={() => setCash(true)}>By
                cash
            </div>
            <div
                className="border border-neutral-300 w-3/4 h-24 rounded-xl mt-8 text-4xl flex items-center justify-center bg-neutral-100 hover:cursor-pointer"
                onClick={() => setBit(true)}>
                <b>Bit</b>coin
            </div>
            {card && (
                <CardPay setCard={setCard}/>
            )}
            {cash && (
                <CashPay setCash={setCash}/>
            )}
        </div>
    );
};

export default Order;