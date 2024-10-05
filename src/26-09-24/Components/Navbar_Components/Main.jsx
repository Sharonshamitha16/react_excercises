import React from 'react'
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';


export const Footer = () => {
  return (
    <div>Footer</div>
  )
}

const Main = () => {
  return (
    <div className="w-full min-h-[100vh]">
      <NavBar />
      <div className="w-full flex-1 flex justify-center items-center">
        <Outlet />
      </div>
      <div className='bg-yellow-200 font-bold text-2xl  flex justify-center items-center'>
      <Footer />
      </div>
    </div>
  );
  
}

export default Main