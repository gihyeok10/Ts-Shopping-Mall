import React from 'react'
import { useNavigate } from 'react-router'
const Main = () => {
    const navigate = useNavigate()
    const navigateMove = ():void=> {
        navigate('/detail')
    }
  return (
    <div>
        <button onClick={navigateMove}>Go Detail</button>
    </div>
  )
}

export default Main

export{}