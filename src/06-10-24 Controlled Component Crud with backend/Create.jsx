import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const Create = () => {
    const initialstate = {
        productName: '',
        price: '',
        rateing: '',
    }
    const [formData, setformData] = useState(initialstate)

    const handleChange = (e) =>
         {
            console.log("name:" + e.target.value, "Value:" + e.target.value)
            const { name, value } = e.target
            setformData((prevState) => ({...prevState, [name]: value}))
         }
const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(formData);
    try{
    await axios
    .post('http://localhost:8000/product_backend',formData)
    .then((res)=>{if(res){
        setformData(initialstate)
        toast.success(res.data.message)
    }})
    .catch((err)=>toast.error(err.response.data.message ))
    }
    catch(e){
        console.log(e);
        
    }
    
}
// useEffect(()=>{
//     console.log("did mount ");
    
// },[])
return (
    <div className='w-full h-screen flex justify-center items-center flex flex-col gap-1'>
        <h1 className='text-xl'>Create Component</h1>
        <form onSubmit={handleSubmit} onReset={() => setformData(initialstate)} className='flex flex-col gap-3'>
            <input
                type='text'
                value={formData.productName}
                name='productName'
                onChange={handleChange}
                // onChange={(e) => setformData({ ...formData, productName: e.target.value })}
                placeholder='Product Name'
                className='flex justify-center items-center p-2 border border-teal-300 ' />
            <input
                type='number'
                value={formData.price}
                name='price'
                onChange={handleChange}
                // onChange={(e) => setformData({ ...formData, price: e.target.value })}
                placeholder='Price'
                className='flex justify-center items-center p-2 border border-teal-300 ' />

            <input
                type='text'
                value={formData.rateing}
                onChange={handleChange}
                name='rateing'
                // onChange={(e) => setformData({ ...formData, rateing: e.target.value })}
                placeholder='Rating'
                className='flex justify-center items-center p-2 border border-teal-300 ' />
            <div className='flex gap-1 flex-row'>  <button className=' w-full px-3 py-1.5 rounded text-white bg-blue-500 hover:opacity-0.5 ' type='submit' >submit</button>
             <button className=' w-full px-3 py-1.5 rounded text-white bg-blue-500 hover:opacity-1' type='reset'>Reset </button></div>
        </form>
    </div>
)
}

export default Create