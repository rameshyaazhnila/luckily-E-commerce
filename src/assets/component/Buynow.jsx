import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './Contexthook';
import {Menu,X} from 'lucide-react'
import useAos from '../CustomAos';

const Buynow = () => {
    const{items,setItems,show,setShow}=useContext(AppContext);
    const[totalamt,settotalamt]=useState()
    const[qty,setqty]=useState()
    useAos()
    const cancel=(received)=>{
        setItems(items.filter(curr=>curr.id!=received))
        
    }
    const condition=()=>{
      setShow((curr)=>!curr)
    }
    const close=()=>{
      setShow((curr)=>!curr)
    }
    useEffect(()=>{
      settotalamt(items.reduce((curr,acc)=>(curr+parseInt(acc.price*acc.qty)),0))
      setqty(items.reduce((curr,acc)=>(curr+parseInt(acc.qty)),0))
      
    },[items])
  return (
    
    <div className='flex flex-col justify-center items-center'>
          {items.map((item)=>
          <div key={item.id} className='flex items-center gap-5 m-10'>
            <div className='w-[200px] h-[230px]'>
              <img src={item.image} alt="" className='w-[100%] h-[100%] object-cover' data-aos="fade-down"/>
            </div>
            <div className='flex flex-col justify-center text-white font-bold' data-aos="zoom-in-left">
              <h2>{item.brand}</h2>
              <p>{item.delivery}</p>
              <h2>price : Rs-{item.price}</h2>
              <h2>qty : {item.qty}</h2>
              <h1 className='bg-green-600 my-3 px-1 py-2 rounded-md'>Amount : {item.price*item.qty}</h1>
              <button className='bg-red-600 my-3 px-1 py-2 rounded-md' onClick={()=>cancel(item.id)}>cancel</button>
            </div>
            
           </div>)}
           {show&&<div className='fixed w-[400px] h-[150px] text-white font-normal bg-slate-600 rounded-t-lg p-5 flex justify-around z-15 bottom-12'>
            <div>
              
              <p>delivery..................................</p>
              <p>Total quantity.................................</p>
              <p>Gst.............................................</p>
              <p>total amt................................</p>
            </div>
            <div>
              
              <p>free delivery</p>
              <p>{qty} qty</p>
              <p>10%</p>
              <p>{totalamt}</p>
            </div>
            <div className='absolute top-0 right-0 bg-green-800 p-1 rounded-full cursor-pointer' onClick={close}>{<X/>}</div>
          </div>}
          {!show?<div className='cursor-pointer p-4 text-2xl font-medium fixed bottom-0 bg-green-600 w-screen flex justify-center items-center text-white '>
            <button onClick={condition}>Buy Now</button>
          </div>:<div className='cursor-pointer p-4 text-2xl font-medium fixed bottom-0 bg-green-600 w-screen flex justify-center items-center text-white '>
            <Link to='/pay'>Pay Now</Link>
          </div>}
    </div>
    
  )
}

export default Buynow