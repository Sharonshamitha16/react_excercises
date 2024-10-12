import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const Update = () => {

    const {id}=useParams()

    console.log(id);
    
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
    console.log(formData);
    try{
    await axios
    .put(`http://localhost:8000/product_backend?_id=${id}`,formData)
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
const GetbyId = async()=>{
    await axios.get(`http://localhost:8000/getFindbyid/${id}`)
    .then((res)=>setformData(res.data)    )
    .catch((err)=>toast.error(err.response.data.message ))
    }
useEffect(()=>{
    GetbyId()
},[])



return (
    <div className='w-full h-screen flex justify-center items-center flex flex-col gap-4'>
        <h1 className='text-xl'>Update Component</h1>
        <form onSubmit={handleSubmit} onReset={() => setformData(initialstate)} className='flex flex-col gap-3'>
            <input
                type='text'
                value={formData.productName}
                name='productName'
                onChange={handleChange}
                placeholder='Product Name'
                className='flex justify-center items-center p-2 border border-teal-300 ' />
            <input
                type='number'
                value={formData.price}
                name='price'
                onChange={handleChange}
                placeholder='Price'
                className='flex justify-center items-center p-2 border border-teal-300 ' />

            <input
                type='text'
                value={formData.rateing}
                onChange={handleChange}
                name='rateing'
                placeholder='Rating'
                className='flex justify-center flex items-center p-2 border border-teal-300 ' />
            <div className='flex gap-1 flex-row'>  <button className=' w-1/2 px-3 py-1.5 rounded text-white bg-blue-500 hover:opacity-0.5 ' type='submit' >Update</button>
             <button className=' w-1/2 px-3 py-1.5 rounded text-white bg-blue-500 hover:opacity-1' type='reset'>Reset </button></div>
        </form>
    </div>
)

}
export default Update