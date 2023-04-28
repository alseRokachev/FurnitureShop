import React from 'react';
import Item from "./item";

const Items = ({array, setBasket, basket, setCard, setCardData}) => {
    return (
        <div className={'newest_container'}>
            <p className={'text-2xl poppins mb-8'}>Newest</p>
            <div className={'flex flex-wrap justify-between items'}>
                {array.map((item, index) => {
                    if (index > array.length - 9) {
                        return <div key={item.id}><Item data={item} basket={basket} setBasket={setBasket} item={item}
                                                        setCard={setCard} setCardData={setCardData}/></div>
                    }
                })}
            </div>
        </div>
    );
};

export default Items;