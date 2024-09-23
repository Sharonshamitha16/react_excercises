// import React from 'react'
// import App from './App'
// import UseEffectSample from './20-09-24/UseEffectSample'
// import { CounterApp } from './Counterapp_props_state/CounterApp'
// import { Routes,Route } from 'react-router-dom'



// export const RouterEx = () => {
//   return (
//     <div className='w-full h-screen flex flex-col   justify-center items-center'>
//         <div className='flex flex-col gap-3'>
//         <App/>
//     <Routes>
//         {/* <Route path="/" element={ <App />} /> */}
//         <Route path="/UseEffectSample" element={<UseEffectSample />} />
//         <Route path="/CounterApp" element={<CounterApp />} />
//         <Route path="*" element={<h1>Page Not Found</h1>} />
//       </Routes>
//       </div>
//   </div>
//   )
// }
import React from 'react'
import App from './App'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Task1/components/Navbar'
import Home from './Task1/components/Home'
import About from './Task1/components/About'

const RouterEx = () => {
    return (
        <div>
            <App />
            <Routes>
                <Route path="/Navbar" element={<Navbar />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                

                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
        </div>
    )
}

export default RouterEx
