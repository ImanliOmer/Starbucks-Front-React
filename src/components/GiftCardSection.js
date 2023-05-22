import React from 'react';

const GiftCardSection = () => {
    return (
        <div className='flex items-center justify-between px-10 mt-8' style={{ height: '100px', widows: '100%', backgroundColor:"#AFE1AF" }}>
            <div className='flex gap-8 '>
                <h2 className='font-bold my-10'>
                    Got a gift card?
                </h2>
                <p className='my-10'>
                    Earns 2★Stars per $1
                </p>
                <a className="sb-button sb-button--default sb-button--white my-10 flex justify-center items-center" href="SignIn" style={{ width: "100px", height: "30px" }}>
                    Sign In
                </a>

                <a className="sb-button bg-black sb-button--default sb-button--white my-10 flex justify-center items-center" href="LoginIn" style={{ width: "100px", height: "30px", color: 'white' }}>
                    Join now
                </a>
            </div>
            <div className='flex '>
                <p className='my-10' style={{color:'darkgreen'}}>Card Terms & Conditions</p>
            </div>
        </div>
    );
};

export default GiftCardSection;
