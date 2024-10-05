import React from 'react'

const ListAndKeys = () => {

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
                data.map(({ _id, name, age, email }, index) => (
                    <div key={_id}>
                        <h1>Name: {name}</h1>
                        <h1>Age: {age}</h1>
                        <h1>Email: {email}</h1>
                    </div>
                ))
            ) : (
                <h1>not found</h1>
            )}


        </div>
    )
}

export default ListAndKeys