import React, { useEffect, useState } from 'react'

const Mycart = ({items,setitems}) => {
  const[total,settotal]=useState(100);
  useEffect(()=>{
    settotal(items.reduce((pre, curr) => pre + parseInt(curr.price), 0))
  },[items])
  return (
    <div className='flex flex-col justify-center items-center'>
          {items.map((item)=>
          <div key={item.id} className='flex items-center gap-5 m-10'>
            <div className='w-[200px] h-[230px]'>
              <img src={item.image} alt="" className='w-[100%] h-[100%] object-cover'/>
            </div>
            <div className='py-2 text-white font-bold'>
              <h2>{item.brand}</h2>
              <h2>price:${item.price}</h2>
              <p>{item.delivery}</p>
              <button className='rounded-[8px] bg-green-600 py-1 px-2 my-2' >Buy Now</button>
              <br></br>
              <button className='rounded-[8px] bg-red-600 py-1 px-2' onClick={()=>setitems(items.filter(mycart=>mycart.id!=item.id))}>Remove</button>
            </div>
          </div>)}
          
          <div className='text-center text-2xl font-medium fixed bottom-0 bg-green-600 w-screen p-3'>
            <button className='text-white'>Place Order:${total}</button>
          </div>
      
    
    </div>
  )
}

export default Mycart