import React from 'react'
const Carouseltop = ({desc1,desc2}) => {
    return (
        <div className='flex  justify-between mx-2 my-5'>
            <h3 className='font-bold text-sm '>
                {desc1}
            </h3>
            <h3 style={{ color: 'green' }}>
                {desc2}
            </h3>
        </div>
    )
}

export default Carouseltop;
