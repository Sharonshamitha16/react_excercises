import React from 'react'
import { Link } from 'react-router-dom'
const SideBarMenuComp = () => {
  return (
    <div className=" flex flex-col gap-5 bg-slate-500 justify-center items-center">
      <span className="px-4 py-1.5 bg-blue-500 text-white rounded-md ">
        <Link to={"/nav/sidebar"}>DashBoard</Link>
      </span>
      <span className="px-4 py-1.5 bg-blue-500 text-white rounded-md">
        <Link to={"/nav/sidebar/profile"}>Profile</Link>
      </span>
      <span className="px-4 py-1.5 bg-blue-500 text-white rounded-md">
        <Link to={"/nav/sidebar/register"}>Register</Link>
      </span>
      <span className="px-4 py-1.5 bg-blue-500 text-white rounded-md">
        <Link to={"/nav/sidebar/categories"}>Categories</Link>
      </span>
    </div>
  )
}

export default SideBarMenuComp