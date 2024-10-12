import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContextFunction } from '../04-10-24/ConextComp'
const IndexComponent = ({children}) => {
const {state} = useContext(ContextFunction) 
console.log(children,"children from indexcomp");

  const navigate = useNavigate()

  const data = "data from index component"
  const role = "user"
  const handleNavigate = () => {
    if (role == "user") { navigate('/function') }
    else {
      navigate('/class')
    }
  }
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col gap-4'>

      <Link to={'/function'} state={data}>Navigate with Link Element</Link>
      <button onClick={handleNavigate}>Navigate with UseNaviagate Hook</button>
    </div>
  )
}

export default IndexComponent