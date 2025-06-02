import { useState } from 'react'
import Home from './pages/Home.jsx'
import ArrayPage from './pages/ArrayPage.jsx'
import VectorPage from './pages/VectorPage.jsx'
import LinkedListVisualizer from './pages/LinkedListVisualizer.jsx'
import {Route , Routes  } from 'react-router-dom'

import 'remixicon/fonts/remixicon.css'; 

function App() {


  return (
    < >
    <Routes>
<Route path='/' element={<Home/>} / >
<Route path='/Array' element={<ArrayPage/>} / >
<Route path='/Vector' element={<VectorPage/>} / >
<Route path='/Linked-List' element={<LinkedListVisualizer/>} / >


    </Routes>
  
    </>
  )
}

export default App
