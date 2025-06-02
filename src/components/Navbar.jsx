import React from 'react'

const Navbar = ({name}) => {
  return (
    <div className='p-4   bg-transparent backdrop-blur-3xl shadow-white shadow-lg  w-full flex justify-center items-center '>
      <h2 className='font-bold text-white  text-3xl '>{name}</h2>
    </div>
  )
}

export default Navbar
