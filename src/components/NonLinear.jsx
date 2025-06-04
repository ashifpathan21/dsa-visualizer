import React  from 'react'
import {useNavigate} from 'react-router-dom'
import data from '../data/nonLinear.js'
const NonLinear = () => {
    const navigate = useNavigate()
  return (
   <div className='w-full mt-200 lg:mt-20 md:mt-20    bg-zinc-500  p-4 py-6   h-full'>
     
     <h2 className='font-bold text-zinc-300  text-2xl text-center mt-15  '> Non Linear Data Structure </h2>
      

      <div className='grid space-y-10 p-8 px-12  space-x-10   lg:grid-cols-3  md:grid-cols-2  grid-cols-1 '>
          
      
         {data.map((data , i ) => 
         <div key={i} onClick={
            () => {
            navigate(`/${data?.name}`)
            }
         } className='relative h-60 w-80 shadow shadow-white overflow-hidden bg-zinc-900 rounded-lg p-4 '>
            <div className='h-full hover:opacity-100 transition-all duration-100  flex justify-center items-center  opacity-0  overflow-hidden w-full bg-transparent backdrop-blur-xl absolute top-0 bottom-0 right-0 left-0 '>
                  <span className='font-bold text-zinc-900'>Click to view </span>
            </div>
            <img src={data?.img }className='aspect-square w-full rounded-lg  h-40 object-cover ' />

            <h2 className='text-center font-semibold text-xl p-2 '>{data?.name} </h2>
          </div>
        
        ) }
         
      </div>
    </div>
  )
}

export default NonLinear
