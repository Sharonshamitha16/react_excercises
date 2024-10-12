import React, { useRef } from 'react'

const UncontrolledComponent = () => {
    const userNameRef = useRef(null)
    const emailRef = useRef(null)
    const addressRef = useRef(null)
    const phoneRef = useRef(null)

    const handlesubmit = (e) => {
        e.preventDefault()
        const body ={
            userName: userNameRef.current.value,
            email: emailRef.current.value,
            address: addressRef.current.value,
            phoneNum: phoneRef.current.value,


        };
        console.log(body);
        
        userNameRef.current.value = ''
        emailRef.current.value = ''
        addressRef.current.value = ''
        phoneRef.current.value = ''

    }
    console.log("re-rendering....")
    return (
        <form className='w-full h-screen flex flex-col gap-1 justify-center items-center' onSubmit={handlesubmit}>
            <h1>uncontrolled Component</h1>
            <input type='text'
                ref={userNameRef}
                placeholder='Username' required
                className='flex justify-center items-center p-3 border border-teal-300 outline-none rounded ' />
            <input type='email'
                ref={emailRef}
                placeholder='email' required
                className='flex justify-center items-center p-3 border border-teal-300 outline-none rounded ' />
            <input type='text'
                ref={addressRef}
                placeholder='Address' required

                className='flex justify-center items-center  p-3 border border-teal-300 outline-none rounded ' />
            <input type='number'
                ref={phoneRef}
                placeholder='phoneNum' required
                className='flex justify-center items-center p-3 border border-teal-300 outline-none rounded ' />

            <button type='submit'>Submit</button>
            <button type='reset'>RESET</button>

        </form>

    )
}

export default UncontrolledComponent