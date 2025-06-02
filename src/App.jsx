import { useState } from 'react'
import Home from './pages/Home.jsx'
import ArrayPage from './pages/ArrayPage.jsx'
import VectorPage from './pages/VectorPage.jsx'
import {Route , Routes  } from 'react-router-dom'

import 'remixicon/fonts/remixicon.css'; 

function App() {


  return (
    < >
    <Routes>
<Route path='/' element={<Home/>} / >
<Route path='/Array' element={<ArrayPage/>} / >
<Route path='/Vector' element={<VectorPage/>} / >


    </Routes>
  
    </>
  )
}

export default App
