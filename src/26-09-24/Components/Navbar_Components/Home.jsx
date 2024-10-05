import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
      <div className="flex justify-center items-center  flex  flex-col ">
          <h1 className="font-extrabold text-3xl gap-5">Home Page</h1>
          <Link to ={`/setting/${3456}`} className="bg-slate-700 rounded-lg m-2 p-3"> Dynamic Routes
 </Link>
      </div>
    )
      
  };
   