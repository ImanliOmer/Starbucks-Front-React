import React from 'react'

const  GiftCardAbout =()=> {
  return (
    <>
    <div className='flex flex-row mt-8'>
        <div className='ml-2'>
            <img style={{width:'300px', height:'200px'}} src='https://www.starbucks.com/weblx/images/gift/bulk-gift-cards.jpg' />
        </div>
            <div className='flex flex-col ml-1 gap-4'>
            <h2 className='font-bold '>
            Gift Cards in Bulk
            </h2>
            <p>
            There’s an easier way to buy Starbucks <br></br> Cards in bulk! Give a Starbucks Card to <br></br> gift, reward, incentivize, or show <br></br> appreciation towards your customers, <br></br> clients and team members.
            </p>
            <button
                    className="w-8  shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none item-center text-black font-bold py-2 px-4 rounded-full"
                    style={{ backgroundColor: '#fff' , border:'1px solid black'}}
                    type="submit"
                >
                    Sign In
                </button>
        </div>
    </div>
    </>
  )
}


export default GiftCardAbout;

