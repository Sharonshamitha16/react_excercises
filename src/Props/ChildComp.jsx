import React from "react";
export const ChildComp =({btnName,handleFunc})=>{
    return(
        <div>
            
            <button onClick={handleFunc}>{btnName}</button>
        </div>
    )
}
export const ChildComp2 =({props})=>{
    const {btnName,handleFunc}=props
    return(
        <div>
            
            <button className=" bg-blue-500 text-white px-5 py-5 rounded "onClick={handleFunc}>{btnName}</button>
        </div>
    )
}

export const ChildComp3 =({props1})=>{
    const {btnName,handleFunc}=props1
    return(
        <div>
            
            <button onClick={handleFunc}>{btnName}</button>
        </div>
    )
}