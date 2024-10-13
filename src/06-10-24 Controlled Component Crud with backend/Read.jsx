import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MappedData = ({ value, setData }) => {
    const navigate = useNavigate()
    const handleDelete = async (id) => {

        await axios
            .delete(`http://localhost:8000/product_backend?_id=${id}`)
            .then((res) => {
                toast.success(res.data.message)
                setData((prevState) => prevState.filter(value => value._id !== id)) 
            })
                    .catch((err) => toast.error(err.response?.data?.message))
   
           
        }
        return (
            <div className=' border border-blue-700 bg-blue-200 flex flex-col gap-2 m-2 p-6 rounded-md '>
                <h1>product Name: {value?.productName}</h1>
                <h1>Price: {value?.price}</h1>
                <h1>Rating: {value?.rateing}</h1>
                <div className='flex gap-1 flex-row'>
                    <button className=' w-full px-3 py-1.5 rounded text-white bg-blue-500 hover:opacity-0.5 ' type='submit' onClick={() => navigate(`/update/${value._id}`)}>Edit</button>
                    <button className=' w-full px-3 py-1.5 rounded text-white bg-red-500 hover:opacity-0.5 ' type='submit' onClick={() => handleDelete(value._id)}>Delete</button>
                </div>
            </div>
        )
    }


const Read = () => {
    const [data, setData] = useState([])

    const fetchFunction = async () => {
        try {
            await axios
                .get('http://localhost:8000/product_backend')
                .then((res) => setData(res.data))
                .catch((err) => toast.error(err.message))
        }
        catch (e) {
            console.log(e);

        }
    }

    useEffect(() => {
        fetchFunction()
    }, [])
    console.log(data, 'data');

    return (
        <div>
            <h1 className='text-2xl flex justify-center items-center underline '>Added to Cart Items</h1>
            <div className='flex justify-end gap-1'>
                    <Link className='px-5  py-2.5  rounded text-white bg-green-400' to={`/create`}>Add form</Link>
                </div>
            <div className=' w-full h-screen grid grid-cols-3 p-20 gap-5'>
              

                {
                    data?.map((value) => (
                        <MappedData key={value._id} value={value} />
                    ))}
            </div>
        </div>
    )
}
export default Read