import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const CashPay = ({setCash}) => {
    const [value, setValue] = useState(0)
    const values = ['$', '€', '£', '₴']
    const valuesC = [1, 0.91, 0.8, 36, 74]
    const basketItems = useSelector(state => state.reducers.basket)

    return (
        <div className={'w-full h-3/4 bg-slate-50 absolute top-14'}>
            <div className="flex flex-col items-center relative w-full h-full container">
                <img src="icons8-back-100.png" alt="" className={'w-10 absolute top-7 left-0 z-50 hover:cursor-pointer'}
                     onClick={() => setCash(false)}/>
                <div className="w-full h-full">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <select name="" id=""
                                className={'w-1/2 mt-10 px-1 outline-none border border-neutral-300 rounded-xl values_dropdown'}
                                onChange={(event) => setValue(event.currentTarget.value)}>
                            <option disabled selected className={'bg-neutral-300'}>Choose value</option>
                            <option value={0} className={'bg-neutral-300'}>Dollars</option>
                            <option value={1} className={'bg-neutral-300'}>Euros</option>
                            <option value={2} className={'bg-neutral-300'}>Pounds</option>
                            <option value={3} className={'bg-neutral-300'}>Hryvnias</option>
                        </select>
                        <div className="mt-10">
                            <p>Total price
                                : {Math.round(basketItems.reduce((sum, item) => sum + item.item.price, 0) * valuesC[value])} {values[value]}</p>
                        </div>
                        <div className="w-full flex justify-center absolute bottom-10">
                            <NavLink to={'/adress'}>
                                <button className={'w-44 bg-slate-950 z-40 h-10 rounded-xl text-slate-50'}>Next
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CashPay;