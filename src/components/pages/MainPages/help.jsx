import React, {createRef, useState} from 'react';

const Help = () => {
    const emailValue = createRef()
    const textValue = createRef()
    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)
    const sendForm = (e) => {
        e.preventDefault()
        if (!emailValue.current.value.includes('@') || !emailValue.current.value.includes('.')) {
            emailValue.current.value = ''
            setError1(true)
        }
        if (textValue.current.value === undefined || textValue.current.value === '') {
            setError2(true)
        }
    }
    return (
        <div className={'w-full mt-12'}>
            <form action="" className={'flex flex-col justify-evenly'}>
                <div className="w-full mb-8">
                    <p className={'poppins'}>{!error1 ? 'enter your email' :
                        <p style={{color: 'red'}}>invalid email</p>}</p>
                    <input type="text" className={'w-full h-12 border-2 rounded-xl px-2 poppins focus:outline-gray-600'}
                           ref={emailValue} onFocus={() => setError1(false)}/>
                </div>
                <div className="w-full mb-8">
                    <p className={'poppins'}>{!error2 ? 'enter your question' :
                        <p style={{color: 'red'}}>this field can't be empty</p>}</p>
                    <textarea
                        className={'w-full min-h-[224px] max-h-56 h-56 border-2 rounded-xl px-2 pt-2 poppins focus:outline-gray-600 break-words'}
                        ref={textValue} onFocus={() => setError2(false)}/>
                </div>
                <button className={'bg-neutral-300 rounded-xl poppins h-10'} onClick={sendForm}>submit</button>
            </form>
        </div>
    );
};

export default Help;