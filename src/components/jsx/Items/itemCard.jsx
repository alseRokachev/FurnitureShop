import React from 'react';

const ItemCard = ({item, setCard}) => {
    return (
        <div className={'rounded-xl bg-neutral-300 w-full h-3/4 flex flex-col items-center justify-between'}>
            <div className="w-full h-1/2">
                <img src={item.img} alt="" className={'w-full h-full rounded-t-xl item_card_img'}/>
                <p className={'text-center poppins mt-10 text-xl mb-8'}>{item.name}</p>
                <div className={'poppins mx-4'}>
                    <p className={'poppins text-xl text-center'}>Info</p>
                    <p className={'capitalize'}>Color : {item.color || 'undefined'}</p>
                    <p className={'capitalize'}>Material : {item.color}</p>
                    <p className={'capitalize'}>Weight : {item.weight || 'undefined'} kg</p>
                </div>
            </div>
            <button className={'bg-neutral-400 w-32 h-8 rounded-xl poppins mb-8 mt-8'} onClick={() => setCard(false)}>Close
            </button>
        </div>
    );
};

export default ItemCard;