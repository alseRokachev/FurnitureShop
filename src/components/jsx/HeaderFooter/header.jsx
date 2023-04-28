import React, {useState} from 'react';
import '../../css/styles.css'
import Dropdown from "./dropdown";
import {NavLink} from "react-router-dom";

const Header = ({setCard}) => {
    const [dropdown, setDropdown] = useState(false)
    return (<header className={'h-14 flex flex-row items-center justify-between z-40 relative w-full'}
                    onClick={() => setCard(false)}>
        <div className="text-lg h-full flex flex-col justify-center w-2/4">
                <span className={'poppins'}>
                    <NavLink to={'/'}>
                    <div className="flex items-center">
                        <img src="icons8-home-100.png" alt="" className={'w-7'}/>
                        <p className={'w-fit'}>HouseMania</p>
                    </div>
                </NavLink>
                </span>
        </div>
        <div className="flex flex-row w-2/4 justify-center header_list">
            <div className={'h-full flex items-center poppins justify-center w-2/6'}><NavLink
                to={'/help'}>Help</NavLink></div>
            <div className={'h-full flex items-center poppins justify-center w-2/6'}><NavLink
                to={'/catalogue'}>Catalogue</NavLink></div>
            <div className={'h-full flex items-center poppins justify-center w-2/6'}><NavLink
                to={'/about'}>About</NavLink></div>
        </div>
        <div className="">
            <div className="header_btn" onClick={() => setDropdown(dropdown ? false : true)}>
                <div className={`flex flex-col justify-evenly items-end h-full w-full ${dropdown ? 'hidden' : ''}`}>
                    <div className="w-3/5 bg-slate-950 h-0.5 rounded-xl"></div>
                    <div className="w-4/5 bg-slate-950 h-0.5 rounded-xl"></div>
                    <div className="w-3/5 bg-slate-950 h-0.5 rounded-xl"></div>
                </div>
                <div className={`${dropdown ? 'flex items-center justify-end' : 'hidden'}`}>
                    <img src="icons8-close-100.png" alt="" className={'w-3/4'}/>
                </div>
            </div>
            <div className="relative">
                {dropdown && (<Dropdown setDropdown={setDropdown}/>)}
            </div>
        </div>
    </header>);
};

export default Header;