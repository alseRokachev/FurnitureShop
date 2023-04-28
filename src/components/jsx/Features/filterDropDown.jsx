import React from 'react';

const FilterDropDown = ({setArray, itemsArray, setFilterTheme}) => {
    return (
        <div className={'bg-slate-50 shadow-sm shadow-slate-950 w-56'}>
            <div className="h-8 flex items-center pl-1 hover:bg-neutral-200 duration-200"
                 onClick={() => {
                     setArray(itemsArray.sort((a, b) => a.price - b.price))
                     setFilterTheme(0)
                 }}>By price(increase)
            </div>
            <hr/>
            <div className="h-8 flex items-center pl-1 hover:bg-neutral-200 duration-200"
                 onClick={() => {
                     setArray(itemsArray.sort((a, b) => b.price - a.price))
                     setFilterTheme(1)
                 }}>By price(decrease)
            </div>
            <hr/>
            <div className="h-8 flex items-center pl-1 hover:bg-neutral-200 duration-200" onClick={() => {
                setArray(itemsArray.sort((a,b) => b.id - a.id))
                setFilterTheme(2)
            }}>Newest
            </div>
            <div className="h-8 flex items-center pl-1 hover:bg-neutral-200 duration-200" onClick={() => {
                setArray(itemsArray.sort((a,b) => a.id - b.id))
                setFilterTheme(3)
            }}>Oldest
            </div>
        </div>
    );
};

export default FilterDropDown;