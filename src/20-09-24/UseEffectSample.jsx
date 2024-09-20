import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const UseEffectSample = () => {
    const [state, setState] = useState()

    useEffect(() => {
        console.log("component render everytime when useEffect is trigered");
    })

    useEffect(() => {
        return () => { console.log("componenet did mount") }
    }, [])

    useEffect(() => {
        return () => { console.log("componenet will update") }
    }, [state])

    useEffect(() => {
        return () => {
            console.log("componenet u mount")
        }
    }, [])

    console.log("component render trigger");

    return (
        <div className='w-full h-screen flex  gap-3  justify-center items-center'>
            <p >UseEffect: </p>
            <button onClick={() => setState([])} className='bg-blue-100 mx-2 p-2 rounded'>TRIGGER</button>
            <Link to={'/CounterApp'} className='bg-blue-100 mx-2 p-2 rounded'>Navigate</Link>
        </div>
    )

}

export default UseEffectSample