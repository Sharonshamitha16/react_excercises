import React from 'react'
import App from './App'
import UseEffectSample from './20-09-24/UseEffectSample'
import { CounterApp } from './Counterapp_props_state/CounterApp'
import { Routes,Route } from 'react-router-dom'
import Home from './24-09-24/Home'



export const RouterClassEx = () => {
  return (
    <div className='w-full h-screen flex flex-col   justify-center items-center'>
        <div className='flex flex-col gap-3'>
        <App/>
    <Routes>
        <Route path='/nav' element={<Home/>}>
        <Route index element={<Home/>}/>
        <Route path="/UseEffectSample" element={<UseEffectSample />} />
        <Route path="/CounterApp" element={<CounterApp />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
        {/* <Route path="/" element={ <App />} /> */}
        {/* <Route path="/UseEffectSample" element={<UseEffectSample />} />
        <Route path="/CounterApp" element={<CounterApp />} />
        <Route path="*" element={<h1>Page Not Found</h1>} /> */}
      </Routes>
      </div>
  </div>
  )
}