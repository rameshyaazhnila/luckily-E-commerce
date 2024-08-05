import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Homepage from './Homepage';
import { AppContext } from './Contexthook';
import { useContext } from 'react';
import useAos from '../CustomAos';



const Mycart = () => {
  const{items,setItems,select,setSelect}=useContext(AppContext);
  const navigate = useNavigate();
  const[total,setTotal]=useState(0);
  useAos();
  
  
  const handle=(id,count)=>{
    setItems(items.map((item)=>item.id==id?{...item,qty:count}:item))
  }
  const updated=(received)=>{
    setSelect([...select,received])
    
    navigate('/buy');
  };

  useEffect(()=>{
    setTotal(items.reduce((pre, curr) => pre + parseInt(curr.price), 0))
    
    },[items])
  
  return (
    <>
      {items.length>0?<div className='flex flex-wrap justify-center items-center gap-5'>
          {items.map((item)=>
          <div key={item.id} className='flex items-center justify-center gap-4 space-y-5'>
            <div className='w-[200px] h-[230px]'>
              <img src={item.image} alt="" className='w-[100%] h-[100%] object-cover' data-aos="zoom-in"/>
            </div>
            <div className='flex flex-col justify-center text-white font-bold' data-aos="fade-down">
              <h2>{item.brand}</h2>
              <h2>price:${item.price}</h2>
              <p>{item.delivery}</p>
              <button className='rounded-[8px] bg-green-600 py-1 px-2 mt-5 hover:scale-[1.1] duration-300 ' onClick={()=>updated(item)}>Buy Now</button>
              <br></br>
              <button className='rounded-[8px] bg-red-600 py-1 px-2 block hover:scale-[1.1] duration-300' onClick={()=>setItems(items.filter(mycart=>mycart.id!=item.id))}>Remove</button>
              <select className='text-black w-[50px] h-[30px] rounded-md my-3' value={item.qty} onChange={(e)=>handle(item.id,parseInt(e.target.value))}>
                {[...Array(10).keys()].map((val)=><option key={val+1} value={val+1}>{val+1}</option>)}
              </select>
            </div>
          </div>)}
          
          <div className='p-4 text-2xl font-medium fixed bottom-0 bg-green-600 w-screen flex justify-center items-center text-white cursor-pointer'>
           <Link to='/confirm'>Place Order</Link>
          </div>
          
      </div>:<div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-medium text-white my-5'>your cart is empty</h1>
        <p className='text-white font-sans font-medium text-2xl py-2'>suggestions for you</p>
        <Homepage items={items} setItems={setItems}/>
      </div>}
    
    
    </>
  )
}

export default Mycart




