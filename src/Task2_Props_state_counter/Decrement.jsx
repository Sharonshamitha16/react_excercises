import React from 'react'
import { CounterParent } from './CounterParent'
import { useState } from 'react'
import { Count } from './Count'
const Decrement = () => {
    const [count, Setcount] = useState(0);                    
    const handleDecrement = () => {
        Setcount(count - 1)
    }
    return (
        <div>
          <Count count={count} />   
       
        <CounterParent btnName="Decrement" handleFunc={handleDecrement} />
        </div>
    )
}

export default Decrement