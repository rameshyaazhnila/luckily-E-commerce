import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from './Contexthook'
import{Link,useNavigate} from 'react-router-dom';
import {X} from 'lucide-react'

const Selective = () => {
    const navigate = useNavigate();
    const{items,setItems,select,setSelect,show,setShow}=useContext(AppContext)
    const[totalamt,settotalamt]=useState()
    const[qty,setqty]=useState()
    const cancel=(received)=>{
        setSelect(select.filter(curr=>curr.id!=received))
        setItems(items.filter(curr=>curr.id!=received))
    }
    
    useEffect(()=>{
      settotalamt(select.reduce((curr,acc)=>(curr+parseInt(acc.price*acc.qty)),0))
      setqty(select.reduce((curr,acc)=>(curr+parseInt(acc.qty)),0))
    },[select])
    
    const condition=()=>{
      setShow((curr)=>!curr)
    }
    const close=()=>{
      setShow((curr)=>!curr)
    }
    const changeShow=()=>{
      setShow(false)
      navigate('/pay')
    }
  return (
    
    <div className='flex flex-wrap justify-center items-center overflow-x-hidden'>
          {select.map((item)=>
          <div key={item.id} className='flex items-center gap-5 m-10'>
            <div className='w-[200px] h-[230px]'>
              <img src={item.image} alt="" className='w-[100%] h-[100%] object-cover'/>
            </div>
            <div className='flex flex-col justify-center text-white font-bold'>
              <h2>{item.brand}</h2>
              <p>{item.delivery}</p>
              <h2>price : Rs-{item.price}</h2>
              <h2>qty : {item.qty}</h2>
              <h1 className='bg-green-600 my-3 px-1 py-2 rounded-md'>Amount : {item.price*item.qty}</h1>
              <button className='bg-red-600 my-3 px-1 py-2 rounded-md' onClick={()=>cancel(item.id)}>cancel</button>
            </div>
            
           </div>)}
           {!show&&<div className='fixed w-[300px] h-[150px] text-white font-normal bg-slate-600 rounded-t-lg p-5 m-3 flex justify-around z-15 bottom-12'>
            <div>
              
              <p>delivery....................</p>
              <p>Total quantity.......</p>
              <p>Gst..............................</p>
              <p>total amt.................</p>
            </div>
            <div>
              
              <p>free delivery</p>
              <p>{qty} qty</p>
              <p>10%</p>
              <p>Rs: {totalamt}</p>
            </div>
            <button className='absolute cursor-pointer top-0 right-0 bg-green-800 p-1 rounded-full' onClick={close}>{<X/>}
           </button>
          </div>}
           <div className='p-4 text-2xl font-medium fixed bottom-0 bg-green-600 w-screen flex justify-center items-center text-white '>
            {show?<Link onClick={condition}>Buy Now</Link>:<div onClick={changeShow}>Pay Now</div>}
          </div>
    </div>
    
  )
}

export default Selective