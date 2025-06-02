import React from 'react'
import {useNavigate } from 'react-router-dom' 
const HomeButton = () => {
      const navigate = useNavigate( ) ; 
  return (
 <div onClick={() => navigate('/')} className='h-20 w-20 font-bold text-2xl  absolute left-5 top-20 rounded-lg flex justify-center items-center  '>
      <i className="font-extrabold text-xl  ri-home-4-fill"></i>
    </div>

  )
}

export default HomeButton
