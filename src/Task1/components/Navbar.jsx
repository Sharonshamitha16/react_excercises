import Myimage from "./Assets/logo2.png"
import "./Navbar.css"
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="Navbar-style bg-black stickyactive:text-yellow-600 sticky top-0">
      <div className="container ">
        <ul className="bg-grey text-white flex justify-evenly ">

          <img src={Myimage} alt="" height={20} width={200} className="mb-1" />
          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">
          <Link  className="px-4 py-2 mx-2 rounded text-white"to={"/Home"}> Home
          </Link></li>
          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">
          <Link  className="px-4 py-2 mx-2  rounded text-white"to={"/About"}> 
          About </Link></li>
          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">Resume</li>

          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">Service</li>
          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">Skills</li>
          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">Projects</li>
          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">My Blog</li>

          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">Contact</li>

        </ul>
      </div>
    </div>
    
  );
};

export default Navbar;
