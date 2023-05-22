import React from 'react'

const RewardGetStart = () => {
    return (
        <>
            <div className='mx-4'>
            <div className="flex flex-col justify-center items-center my-10 gap-5">
                <span className="text-lg font-bold">Getting started is easy</span>
                <span className="text-lg">
                    Earn Stars and get rewarded in a few easy steps.
                </span>
            </div>
            <div className="h-auto w-auto flex flex-row justify-center items-center my-10 ">
                <div className="flex flex-col justify-center items-center mx-10">
                    <div className="mb-6 rounded-full h-10 w-10 flex justify-center items-center" style={{ border: '1px solid green' }}>
                        <span className="text-2xl text-green-500">1</span>
                    </div>
                    <div className="text-lg font-bold">
                        <span>Create an account</span>
                    </div>
                    <div className="text-center px-2">
                        <span>
                            To get started,{" "}
                            <a href="#" className="underline text-green-500">
                                join now
                            </a>
                            . You can also{" "}
                            <a href="#" className="underline text-green-500">
                                join in the app
                            </a>{" "}
                            to get access to the full range of Starbucks® Rewards benefits.
                        </span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mx-10">
                    <div className="mb-6 rounded-full h-10 w-10 flex justify-center items-center" style={{ border: '1px solid green' }}>
                        <span className="text-2xl text-green-500">2</span>
                    </div>
                    <div className="text-lg font-bold">
                        <span>Order and pay how you’d like</span>
                    </div>
                    <div className="text-center px-2">
                        <span>
                            Use cash, credit/debit card or save some time and pay right through the
                            app. You’ll collect Stars all ways.{" "}
                            <a href="#" className="underline text-green-500">
                                Learn how
                            </a>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mx-10">
                    <div className="mb-6 rounded-full  h-10 w-10 flex justify-center items-center" style={{ border: '1px solid green' }}>
                        <span className="text-2xl text-green-500">3</span>
                    </div>
                    <div className="text-lg font-bold">
                        <span>Earn Stars, get Rewards</span>
                    </div>
                    <div className="text-center px-2">
                        <span>
                            As you earn Stars, you can redeem them for Rewards—like free food,
                            drinks, and more. Start redeeming with as little as 25 Stars!
                        </span>
                    </div>
                </div>
            </div>
            </div>



        </>
    )
}

export default RewardGetStart;