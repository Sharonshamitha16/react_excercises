import React from 'react'

export const CounterParent = ({ btnName, handleFunc }) => {
    return (
        <div className="flex justify-center my-5 mx-5">
            < div className="flex gap-4">
           
                <button className='bg-orange-400 text-white p-5' onClick={handleFunc}>{btnName}</button>
            </div>
        </div>
    )
}
