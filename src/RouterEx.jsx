
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
