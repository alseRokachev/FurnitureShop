import React from 'react';

const Footer = () => {
    return (
        <footer className={'mb-10 absolute bottom-0 flex flex-col w-full items-center'}>
            <div className="flex w-full items-center justify-center poppins">
                <p><b>Support:</b> +777 777 77 77</p>
            </div>
            <p className={'poppins mt-4'}>HouseMania &copy;</p>
        </footer>
    );
};

export default Footer;