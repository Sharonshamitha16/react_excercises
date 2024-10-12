import React from 'react'
import App from './App'
import UseEffectSample from './20-09-24/UseEffectSample'
import { CounterApp } from './Counterapp_props_state/CounterApp'
import { Routes, Route } from 'react-router-dom'
import Home from './24-09-24/Home'
import IndexComponent from './30-09-24/IndexComponent'
import ContextComp from './04-10-24/ConextComp'
import ListAndKeys from './30-09-24/Listkeys'
import ControlledComponent from './05-10-24/ControlledComponent'
import UncontrolledComponent from './06-10-24 uncontrolled component/UncontrolledComponent'



export const RouterClassEx = () => {
  return (
    <div className='w-full h-screen flex flex-col   justify-center items-center'>
      <div className='flex flex-col gap-3'>
        <ContextComp>
          <Routes>

            <Route path='/' element={<IndexComponent />} />
            <Route path='/listandkeys' element={<ListAndKeys />} />
            <Route path="/UseEffectSample" element={<UseEffectSample />} />
              <Route path='/contextcomp' element={<ContextComp><App/></ContextComp> }/>
              <Route path ="/controlledcomp" element={<ControlledComponent/>}/>
              <Route path ="/uncontrolledcomp" element={<UncontrolledComponent/>}/>

              <Route path="/CounterApp" element={<CounterApp />} />
            <Route path='/nav' element={<Home />}>
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>} />

          </Routes>
        </ContextComp>
      </div>
    </div>
  )
}