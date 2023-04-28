import React from 'react';
import {NavLink} from "react-router-dom";

const OrderAdress = () => {
    return (
        <div className={'flex flex-col items-center justify-center poppins container mt-14'}>
            <div className="w-10 absolute top-16 left-0 z-50 hover:cursor-pointer">
                <NavLink to={'/order'}>
                    <img src="icons8-back-100.png" alt="" className={'w-full h-full'}/>
                </NavLink>
            </div>
            <div className="w-full flex flex-col items-center mt-8">
                <input type="text" placeholder={'Country'} className={'w-3/4 h-10 rounded-xl border border-neutral-300 px-2 outline-none'}/>
                <input type="text" placeholder={'City'} className={'w-3/4 mt-8 h-10 rounded-xl border border-neutral-300 px-2 outline-none'}/>
                <input type="text" placeholder={'Street'} className={'w-3/4 mt-8 h-10 rounded-xl border border-neutral-300 px-2 outline-none'}/>
                <input type="text" placeholder={'Phone Number'} className={'w-3/4 mt-8 h-10 rounded-xl border border-neutral-300 px-2 outline-none'}/>
            </div>
            <button className={'bg-slate-950 text-slate-50 poppins w-3/4 h-10 rounded-xl mt-16 mb-8'}>Order</button>
        </div>
    );
};

export default OrderAdress;