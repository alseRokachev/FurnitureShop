import React from 'react';

const CatalogueHeader = ({themes, setActive, active}) => {
    return (
        <div className={''}>
            <div className="w-full flex flex-wrap justify-center mt-8 poppins">
                {themes.map((item, index) => {
                    return <div
                        className={`w-40 flex justify-center items-center rounded-xl h-10 duration-500 hover:cursor-pointer ${index === active ? 'bg-neutral-300' : ''}`}
                        onClick={() => setActive(index)} key={index}>{item}</div>
                })}
            </div>
        </div>
    );
};

export default CatalogueHeader;