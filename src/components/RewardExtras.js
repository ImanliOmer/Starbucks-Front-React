import React from 'react'

const RewardExtras = () => {
    return (
        <>
            <div className='mx-4'>
                <div className="flex flex-col justify-center items-center my-10 gap-5">
                    <span className="text-lg font-bold">Endless Extras</span>
                    <span className="text-lg ">
                    Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.
                    </span>
                </div>
                <div className="h-auto w-auto flex flex-row justify-center items-center my-10 ">
                    <div className="flex flex-col justify-center items-center mx-10">
                        <div className="mb-6 rounded-full h-20 w-20 flex justify-center items-center" style={{ border: '1px solid green' }}>
                            <img className='h-20 w-20' src='https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg'/>
                        </div>
                        <div className="text-lg font-bold">
                            <span>Fun freebies</span>
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
                        <div className="text-center px-2">
                            <span style={{color:'green'}}>
                                Learn More
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mx-10">
                    <div className="mb-6 rounded-full h-20 w-20 flex justify-center items-center" style={{ border: '1px solid green' }}>
                            <img className='h-20 w-20' src='https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg'/>
                        </div>
                        <div className="text-lg font-bold">
                            <span>Order & pay ahead</span>
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
                        <div className="text-center px-2">
                            <span style={{color:'green'}}>
                                Learn More
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mx-10">
                    <div className="mb-6 rounded-full h-20 w-20 flex justify-center items-center" style={{ border: '1px solid green' }}>
                            <img className='h-20 w-20' src='https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg'/>
                        </div>
                        <div className="text-lg font-bold">
                            <span>Get to free faster</span>
                        </div>
                        <div className="text-center px-2">
                            <span>
                                As you earn Stars, you can redeem them for Rewards—like free food,
                                drinks, and more. Start redeeming with as little as 25 Stars!
                            </span>
                        </div>
                        <div className="text-center px-2">
                            <span style={{color:'green'}}>
                                Learn More
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RewardExtras;