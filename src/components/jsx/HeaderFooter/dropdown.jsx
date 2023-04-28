import React from 'react';
import {NavLink} from "react-router-dom";

const Dropdown = ({setDropdown}) => {
    return (
        <div className={'bg-slate-100 absolute z-10 right-0 w-44 h-36 poppins flex flex-col justify-evenly shadow-sm shadow-slate-950'}>
            <NavLink to={'/help'}>
                <p className={'text-slate-950 mx-2'} onClick={() => setDropdown(false)}>Help</p>
            </NavLink>
            <hr/>
            <NavLink to={'/catalogue'}>
                <p className={'text-slate-950 mx-2'} onClick={() => setDropdown(false)}>Catalogue</p>
            </NavLink>
            <hr/>
            <NavLink to={'/about'}>
                <p className={'text-slate-950 mx-2'} onClick={() => setDropdown(false)}>About</p>
            </NavLink>
        </div>
    );
};

export default Dropdown;