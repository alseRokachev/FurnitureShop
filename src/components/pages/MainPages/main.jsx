import React from 'react';
import Presentation from "../../jsx/Features/presentation";
import Items from "../../jsx/Items/items";
import BasketBtn from "../../jsx/Basket/basketBtn";
import BasketModal from "../../jsx/Basket/basketModal";
import ItemCard from "../../jsx/Items/itemCard";
import {useSelector} from "react-redux";

const Main = ({itemsArray, setBasket,setCard, setCardData, setRight, cardData, card, right}) => {
    const basketItems = useSelector(state => state.reducers.basket)
    return (
        <div className={'relative flex flex-col items-center'}>
            <div className="w-full">
                <Presentation/>
            </div>
            <Items array={itemsArray} setBasket={setBasket} basket={basketItems} setCard={setCard}
                   setCardData={setCardData}/>
            <div className="z-40" onClick={() => setRight(0)}><BasketBtn basket={basketItems}/></div>
            <div className="fixed bg-neutral-300 h-full duration-700 top-0 basket z-50" style={{right: `${right}px`}}>
                <BasketModal close={setRight} array={basketItems} setArray={setBasket}/>
            </div>
            <div
                className={`fixed flex h-screen justify-center items-center top-0 w-1/4 item_card ${card ? `z-30` : '-z-10'}`}>
                {card && (
                    <ItemCard item={cardData} setCard={setCard}/>
                )}
            </div>
            {card && (
                <div className={'absolute bg-neutral-300 opacity-50 w-full h-full'}></div>
            )}
        </div>
    );
};

export default Main;