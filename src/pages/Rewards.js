import RewardEarnStar from 'components/RewardEarnStar';
import RewardExtras from 'components/RewardExtras';
import RewardFAQ from 'components/RewardFAQ';
import RewardFavorite from 'components/RewardFavorite';
import RewardGetStart from 'components/RewardGetStart';
import Rewardshero from 'components/Rewardshero';
import Rewardtop from 'components/Rewardtop';
import React from 'react'

 const  Rewards = () => {
  return (
    <>
    
    <Rewardtop/>
   <Rewardshero/>
   <RewardGetStart/>
   <RewardFavorite/>
   <RewardExtras/>
   <RewardEarnStar/>
   <RewardFAQ/>
    </>
  )
}


export default Rewards;