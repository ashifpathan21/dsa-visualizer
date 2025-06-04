import { useState } from 'react' 

import Navbar from '../components/Navbar.jsx'
import Definition from '../components/Definition.jsx'
import Background from '../components/Background.jsx'
import Grid from '../components/Grid.jsx'
import NonLinear from '../components/NonLinear.jsx'
const Home = () => {
  return (
   <div className=' relative bg-zinc-500  h-screen w-screen overflow-x-hidden text-white '>
    <div className='absolute h-full z-10   w-full max-h-screen left-0 right-0   top-5   '> 
      <Background/>
      </div>
   <Navbar name={'Data Structure Visualizer'}/>
   <Definition/>
   {/* linear data strucutures */}
     <Grid/>
     {/* non linear ds */}
     <NonLinear/>
   </div>
  )
}

export default Home
