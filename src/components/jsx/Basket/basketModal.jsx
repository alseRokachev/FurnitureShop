import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeFromBasket} from "../../../store/reducersBasket";

const BasketModal = ({close}) => {
    const dispatch = useDispatch()
    const basketItems = useSelector(state => state.reducers.basket)

    const [sum, setSum] = useState(0)
    const [length, setLength] = useState(0)

    useEffect(() => basketItems.length > 0 ?
        setSum(basketItems.reduce((sum, item) => sum + item.item.price, 0))
        : setSum(0), [basketItems])

    useEffect(() => setLength(basketItems.length), [basketItems])

    return (
        <div className={'relative flex flex-col items-center h-full'}>
            <img src="icons8-close-100.png" alt="" className={'absolute right-5 top-5 w-8 h-8 hover:cursor-pointer'}
                 onClick={() => close(-1000)}/>
            <p className={'text-3xl poppins text-center mt-12 mb-8'}>Basket</p>
            <div
                className="flex flex-col items-center w-full mr-9 overflow-scroll h-2/3 overflow-x-hidden scrollbar mb-8 items_container">
                {basketItems.length > 0 ?
                    basketItems.map((item, index) => {
                        return <div
                            className={'w-4/5 h-16 bg-slate-100 rounded-xl flex items-center mb-8 relative basket_item'}
                            key={index}>
                            <img src={item.item.img} alt="" className={'h-full rounded-l-xl mr-4 w-24 item_img'}/>
                            <div className="">
                                <p className={'poppins mr-7'}>{item.item.name}</p>
                                <p className={'poppins text-sm'}>{item.item.price} $</p>
                            </div>
                            <img src="icons8-close-100.png" alt="" className={'w-6 absolute right-5 hover:cursor-pointer'}
                                 onClick={() => dispatch(removeFromBasket(item))}/>
                        </div>
                    })
                    :
                    ''
                }
            </div>
            <div className="flex w-80 justify-between mb-8">
                <div className="poppins">Total price : {sum} $</div>
                <div className="poppins">Total items : {length}</div>
            </div>
            {basketItems.length > 0 && (
                <div className="w-1/2">
                    <NavLink to={'/order'}>
                        <button className={'bg-slate-950 text-slate-50 poppins w-full h-12 rounded-xl mb-8'}
                                onClick={() => close(-1000)}>Order
                        </button>
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default BasketModal;