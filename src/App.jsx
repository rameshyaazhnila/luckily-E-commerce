import React, { useState } from 'react'
import './index.css'
import Nav from './assets/component/Nav'
import Form from './assets/component/Form'
import Contact from './assets/component/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './assets/component/About'
import Homepage from './assets/component/Homepage'
import Mycart from './assets/component/Mycart'
import Buynow from './assets/component/Buynow'
import Selective from './assets/component/Selective'
import Pay from './assets/component/Pay'
import {AppContext} from './assets/component/Contexthook'
import Service from './assets/component/Service'





const App = () => {
  const[items,setItems]=useState([]);
  const[select,setSelect]=useState([]);
  const[show,setShow]=useState(false);

  
  return (
    <AppContext.Provider value={{items,setItems,select,setSelect,show,setShow}}>
      
      <BrowserRouter>
      <div className='sticky top-0 z-10 md:top-5'>
        <Nav/>
    
      </div>
      <div className='flex justify-center py-10 z-2'>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/signin' element={<Form/>}/>
          <Route path='/cart' element={<Mycart/>}/>
          <Route path='/pay' element={<Pay items/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/account' element={<Service/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/confirm' element={<Buynow/>}/>
          <Route path='/buy' element={<Selective/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      </AppContext.Provider>
    )
}

export default App