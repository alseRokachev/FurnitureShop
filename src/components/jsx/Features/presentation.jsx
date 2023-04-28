import React, {useEffect, useState} from 'react';
import '../../css/styles.css'

const Presentation = () => {
    const [txt, setTxt] = useState('')
    const text = 'The Best'
    const textAnimation = () => {
        setTxt('');
        const interval = setInterval(setTxt, 900, txt => {
            if (txt.length + 1 > text.length) {
                setTxt('')
            }
            return text.slice(0, txt.length + 1);
        });
    }
    useEffect(() => textAnimation, [])

    return (
        <div>
            <div className="presentation-bg relative flex items-center mb-24">
                <img src="presentation.jpg" alt="" className={'w-full presentation-img'}/>
                <p className={'absolute poppins text-slate-50 text-8xl p-6 text'}>{txt}{txt.length === text.length ? '' : <span className={'line'}>|</span>}</p>
            </div>
        </div>);
};

export default Presentation;