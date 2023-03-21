import React from 'react'
import { useNavigate } from 'react-router'
const MainPage = () => {
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

export default MainPage

export{}