import React,{ useState } from "react";

 const RewardFavorite = ( ) => {
    
        const [activeIndex, setActiveIndex] = useState(0);
        
        const handleClick = (index) => {
            setActiveIndex(index);
        }
  return (
    <>
    <div className="h-auto w-auto p-14 flex flex-col justify-center items-center" style={{backgroundColor:'#d3e8e154'}}>
        <h3 className="text-lg font-bold my-5">Get your favorites for free</h3>
      </div>
      <div className="w-auto bg-green-100 h-auto flex justify-center items-center gap-8">
        <button autoFocus onClick={() => handleClick(0)} className="text-2xl font-bold  ">
          <span>25</span>
          <span style={{color:"gold"}}>★</span>
        </button>
        <button onClick={() => handleClick(1)} className="text-lg font-bold ">
          <span>100</span>
          <span style={{color:"gold"}} >★</span>
        </button>
        <button onClick={() => handleClick(2)} className="text-lg font-bold ">
          <span>200</span>
          <span style={{color:"gold"}}>★</span>
        </button>
        <button onClick={() => handleClick(3)} className="text-lg font-bold ">
          <span>300</span>
          <span style={{color:"gold"}}>★</span>
        </button>
        <button onClick={() => handleClick(4)} className="text-lg font-bold ">
          <span>400</span>
          <span style={{color:"gold"}}>★</span>
        </button>
      </div>

      <div style={{backgroundColor:'#9FE2BF'}}>
        <div>{activeIndex === 0 && <div className=" transition-transform duration-500 ease-in-out w-auto bg-green-200 flex justify-center items-center p-4">
            <div><img className="w-80" src="https://www.starbucks.ca/weblx/images/rewards/reward-tiers/025.png" alt="cups" /></div>
            <div className="flex justify-center items-start flex-col gap-3">
                <h4 className="text-xl w-80 font-bold">Customize your drink</h4>
                <span className="block w-80">Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.</span>
            </div>
            </div>}</div>
        <div>{activeIndex === 1 && <div className="transition-transform duration-500 ease-in-out w-auto bg-green-200 flex justify-center items-center p-4">
            <div><img className="w-80" src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png" alt="cake" /></div>
            <div className="flex justify-center items-start flex-col gap-3">
                <h4 className="text-xl w-80 font-bold">Brewed hot or iced coffee or tea, bakery item, packaged snack and more</h4>
                <span className="block w-80">Treat yourself to an iced coffee, buttery croissant, bag of chips and more.</span>
            </div>
            </div>}</div>
        <div>{activeIndex === 2 && <div className="transition-transform duration-500 ease-in-out w-auto bg-green-200 flex justify-center items-center p-4 gap-7">
            <div><img className="w-80" src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png" alt="bottle" /></div>
            <div className="flex justify-center items-start flex-col gap-3">
                <h4 className="text-xl w-80 font-bold">Handcrafted drink (Cold Brew, lattes and more) or hot breakfast</h4>
                <span className="block w-80">Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.</span>
            </div>
            </div>}</div>
        <div>{activeIndex === 3 && <div className="transition-transform duration-500 ease-in-out w-auto bg-green-200 flex justify-center items-center p-4">
            <div><img className="w-80" src="https://www.starbucks.ca/weblx/images/rewards/reward-tiers/300.png" alt="pastry" /></div>
            <div className="flex justify-center items-start flex-col gap-3">
                <h4 className="text-xl w-80 font-bold">Sandwich, protein box or at-home coffee</h4>
                <span className="block w-80">Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.</span>
            </div>
            </div>}</div>
        <div>{activeIndex === 4 && <div className="transition-transform duration-500 ease-in-out w-auto bg-green-200 flex justify-center items-center p-4">
            <div><img className="w-80" src="https://www.starbucks.ca/weblx/images/rewards/reward-tiers/400.png" alt="cups" /></div>
            <div className="flex justify-center items-start flex-col gap-3">
                <h4 className="text-xl w-80 font-bold">Select Starbucks® merchandise</h4>
                <span className="block w-80">Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.</span>
            </div>
            </div>}</div>
      </div>
    </>
  )
}
export default RewardFavorite;