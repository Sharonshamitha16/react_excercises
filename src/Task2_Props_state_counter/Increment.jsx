import React from 'react'
import { CounterParent } from './CounterParent'
import { useState } from 'react'
import { Count } from './Count'
const Increment = () => {
    const [count, Setcount] = useState(0);
    const handleIncrement = () => {
        Setcount(count + 1)
    }
    return (
        <div>
            
            <Count count={count} />
        <CounterParent className="bg-orange-400 text-white" btnName="Increment" handleFunc={handleIncrement} />
        </div>
    )
}

export default Increment