import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className="w-full h-20 flex gap-3 justify-evenly items-center bg-blue-100">
      <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
        <Link to={"/nav"}>Home</Link>
      </span>
     
      <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
        <Link to={"/nav/about"}>About</Link>
      </span>
      <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
        <Link to={"/nav/sidebar"}>SideBar</Link>
      </span>
      <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
        <Link to={"/nav/Map"}>Map</Link>
      </span>
      <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
        <Link to={"/nav/Controlcomp"}>Control comp</Link>
      </span>
      <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
        <Link to={"/nav/contact"}>Contact</Link>
      </span>
     
    </div>
  );
}

export default NavBar