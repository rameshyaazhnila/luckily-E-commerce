import React, { useState } from 'react'
import './index.css'
import Nav from './assets/component/Nav'
import Form from './assets/component/Form'
import Contact from './assets/component/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './assets/component/About'
import Homepage from './assets/component/Homepage'
import Mycart from './assets/component/Mycart'




const App = () => {
  const[items,setitems]=useState([]);
  return (
    <div >
      
      <BrowserRouter>
      <div className='sticky top-0 z-10 md:top-5 left-5 right-5'>
        <Nav items={items}/>
    
      </div>
      <div className='flex justify-center py-10 z-2'>
        <Routes>
          <Route path='/signin' element={<Form/>}/>
          <Route path='/cart' element={<Mycart items={items} setitems={setitems}/>}/>
          <Route path='/home' element={<Homepage items={items} setitems={setitems}/>}/>
        </Routes>
      </div>
      
      <div className='flex justify-center py-10 z-2'>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  )
}

export default App