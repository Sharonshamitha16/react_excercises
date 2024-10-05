import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Count = ({ count }) => {
  return (
    <p className=' font-bold  text-2xl text-center mb-20 '>count value : {count} </p>
  )
}
const ButtonComp = ({ btnName, handleFunction, count }) => {
  return (<button className="px-4 py-1.5 rounded bg-blue-200" onClick={handleFunction}>{btnName}</button>)
}

export const CounterApp = () => {
  const [count, setCount] = useState(0)
  
  const location = useLocation();
  
  const handleIncrement = () => {
    setCount((count) => count + 1)
  }
  const handleDecrement = () => {
    setCount((count) => count - 1)
  }
  const handleReset = () => {
    setCount(0)
  }
  return (
    <div className='w-full h-screen flex flex-col   justify-center items-center'>
      <Count count={count} />
     <p>{location.state}</p>
      <div className='flex gap-3 '>
        <ButtonComp btnName="Increment" handleFunction={handleIncrement} />
        <ButtonComp btnName="Decrement" handleFunction={handleDecrement} />
        <ButtonComp btnName="Reset" handleFunction={handleReset} />
      </div>
    </div>
  )
}
