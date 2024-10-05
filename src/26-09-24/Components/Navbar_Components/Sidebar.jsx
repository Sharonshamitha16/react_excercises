import React from 'react'
import { Outlet } from 'react-router-dom';
import SideBarMenuComp from '../SideBar Components/SideBarMenuComp';

const SideBar = () => {
  return (
    <div className="w-full h-screen flex">
    <SideBarMenuComp />
    <div className=" flex justify-center items-center">
      <Outlet />
    </div>
  </div>
  );
}

export default SideBar