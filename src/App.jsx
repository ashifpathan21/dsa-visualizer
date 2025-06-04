import { useState } from 'react'
import Home from './pages/Home.jsx'
import ArrayPage from './pages/ArrayPage.jsx'
import VectorPage from './pages/VectorPage.jsx'
import LinkedListVisualizer from './pages/LinkedListVisualizer.jsx'
import StackVisualizer from './pages/StackVisualizer.jsx'
import TreeVisualizer from './pages/TreeVisualizer.jsx'
import QueuePage from './pages/QueuePage.jsx'
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
<Route path='/Stack' element={<StackVisualizer/>} / >
<Route path='/Queue' element={<QueuePage/>} / >
<Route path='/Tree' element={<TreeVisualizer/>} / >


    </Routes>
  
    </>
  )
}

export default App
