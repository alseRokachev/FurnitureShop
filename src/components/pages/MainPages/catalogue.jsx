import React, {useEffect, useState} from 'react';
import Item from "../../jsx/Items/item";
import BasketBtn from "../../jsx/Basket/basketBtn";
import BasketModal from "../../jsx/Basket/basketModal";
import ItemCard from "../../jsx/Items/itemCard";
import CatalogueHeader from "../../jsx/HeaderFooter/catalogueHeader";
import FilterDropDown from "../../jsx/Features/filterDropDown";
import {useSelector} from "react-redux";

const Catalogue = ({itemsArray, setBasket, setCard, setCardData, setRight, cardData, card, right}) => {
    const [active, setActive] = useState(0)
    const [filter, setFilter] = useState(false)
    const [filterTheme, setFilterTheme] = useState()
    const [array, setArray] = useState(itemsArray)
    const themes = ['Chair', 'Table', 'Kitchen', 'Sofa', 'Closet', 'Bed']
    const filterThemes = ['price increase', 'price decrease', 'newest', 'oldest']

    const basketItems = useSelector(state => state.reducers.basket)

    return (<div className={'w-full relative flex flex-col items-center'}>
        <div className="w-full">
            <CatalogueHeader themes={themes} setActive={setActive} active={active}/>
        </div>
        <div className="w-full">
            <div className={'poppins flex items-center hover:cursor-pointer my-8 relative z-10 w-fit'}
                 onClick={() => setFilter(!filter)}>
                Filter <img src="icons8-tune-100.png" alt="" className={'h-5 ml-1'}/><p
                className={'ml-2 text-neutral-300'}>{filterThemes[filterTheme]}</p>
                {filter && (<div className={'absolute top-7 left-0'}>
                    <FilterDropDown itemsArray={itemsArray} setArray={setArray}
                                    setFilterTheme={setFilterTheme}/>
                </div>)}
            </div>
            <div className="flex flex-wrap justify-between mt-10 items">
                {array.map((item, index) => {
                    if (item.theme === themes[active].toLowerCase()) {
                        return <div key={index}><Item data={item} basket={basketItems} setBasket={setBasket} item={item}
                                                      setCard={setCard} setCardData={setCardData}/></div>
                    }
                })}
            </div>
        </div>
        <div className="" onClick={() => setRight(0)}><BasketBtn/></div>
        <div className="fixed bg-neutral-300 h-full duration-700 top-0 basket z-50"
             style={{right: `${right}px`}}>
            <BasketModal close={setRight} array={basketItems} setArray={setBasket}/>
        </div>
        <div
            className={`fixed flex h-screen justify-center items-center top-0 w-1/4 item_card ${card ? `z-30` : '-z-10'}`}>
            {card && (<ItemCard item={cardData} setCard={setCard}/>)}
        </div>
        {card && (<div className={'absolute bg-neutral-300 opacity-50 w-full h-full z-20'}></div>)}
    </div>);
};

export default Catalogue;