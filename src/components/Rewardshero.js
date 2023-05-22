import React from 'react'

const Rewardshero = () => {
    return (
        <div className="bgImage___1SGc6 flex bg-img-reward items-center" style={{ backgroundColor: 'rgb(212, 233, 226)', height: '600px' }}>
            <div className='flex mx-auto flex-col md\:ml-1' style={{ width: '1000px', height: '300px' }}>
                <h2 className='font-bold pt-8'>

                    FREE COFFEE <br></br>
                    IS A TAP AWAY
                </h2>
                <p className='pt-8' style={{color:'#71797E'}}>
                    Join now to start earning Rewards.
                </p>
                <button
                    className="w-8 pt-8 shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
                    style={{ backgroundColor: '#2E8B57' }}
                    type="submit"
                >
                    Sign In
                </button>
                <p style={{color:'#71797E'}}>
                    Or join in the app for the best experience
                </p>
            </div>
        </div>

    )
}
export default Rewardshero