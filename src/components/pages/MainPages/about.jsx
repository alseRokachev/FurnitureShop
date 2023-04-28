import React from 'react';

const About = () => {
    return (
        <div className={'relative flex flex-col items-center poppins w-full'}>
            <p className={'text-start w-full mt-8'}>Country : UA</p>
            <p className={'text-start w-full mt-2'}>City : Kyiv</p>
            <div className="w-full flex flex-col items-start px-4 mt-8">
                <b>Offices</b>
                <ul className={''}>
                    <li className={'mt-2'}>Kyiv, Lenina 14, 7</li>
                    <li className={'mt-2'}>Crimea, Simferopol, Kyivskaya 17, 15</li>
                    <li className={'mt-2'}>Donetsk, Ukrainskaya 10, 4</li>
                </ul>
            </div>
            <div className="w-full flex flex-col items-start px-4 mt-8">
                <b>Links</b>
                <ul className={''}>
                    <li className={'mt-2'}><a href="">Telegram</a></li>
                    <li className={'mt-2'}><a href="">WhatsUp</a></li>
                    <li className={'mt-2'}><a href="">FaceBook</a></li>
                </ul>
            </div>
            <div className="w-full flex flex-col items-start px-4 mt-8">
                <b>Payment Ways</b>
                <ul>
                    <li className={'mt-2'}>By Card</li>
                    <li className={'mt-2'}>By Cash</li>
                    <li className={'mt-2'}>By BitCoin</li>
                </ul>
            </div>
        </div>
    );
};

export default About;