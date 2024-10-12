import React, { useContext } from 'react'
import { ContextFunction } from '../04-10-24/ConextComp'
const MappedData =({props})=>{
    const {_id,name,email,age}= props
   return (
        <div key={_id}>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>Email: {email}</h1>
        </div>
    )
}
const ListAndKeys = () => {
const {state} = useContext(ContextFunction) || {}
// handle the undefined value ie we can't destructure undefined like a object 
console.log(state);

    const data = [
        {
            _id: 1,
            name: "abc",
            age: 21,
            email: "abc@gmail.com",
        },
        {
            _id: 2,
            name: "xyz",
            age: 22,
            email: "xyz@gmail.com",
        },
        {
            _id: 3,
            name: "pqr",
            age: 22,
            email: "pqr@gmail.com",
        },
        {
            _id: 4,
            name: "sharon",
            age: 21,
            email: "sharon@gmail.com",
        },
        {
            _id: 5,
            name: "mno",
            age: 20,
            email: "mno@gmail.com",
        },
    ];

    return (
        <div className='h-screen p-20 m-10'>
            {data?.length >= 1 ? (
                data.map((value, index) => <MappedData key={value._id} props={value}/>)
            ) : (
                <h1>not found</h1>
            )}


        </div>
    )
}

export default ListAndKeys