import React, { useState } from 'react'

const ControlledComponent = () => {
    const [formData, setFormData] = useState("test")

    const onhandleChange = (event ) => {
        console.log(event.target.value);
        setFormData(event.target.value)
        console.log("re-rendering...");
        
     }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <input type='text' value ={formData} onChange={onhandleChange} className='flex justify-center items-center border-r-teal-300 ' />
        </div>
    )
}

export default ControlledComponent