import React, { useState } from 'react'
import {Menu,X} from 'lucide-react'
import {Link} from 'react-router-dom';



const Nav = ({items}) => {
    const Navlink=[{id:"1",names:"home",path:"/home"},{id:"2",names:"contact",path:"/contact"},{id:"3",names:"about",path:"/about"},{id:"4",names:"service",path:"/service"}];
    const[show,setshow]=useState(false);
    const handleclick=()=>{
        setshow(!show)
    }
    
    
    
  return (<>
    
        <div className='sticky pt-5 top-0 backdrop-blur-[60px] text-white  flex justify-between items-center px-5 py-2 font-semibold'>
            <h1 className='text-4xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-pink-300 to-pink-700 bg-clip-text text-transparent'>Luckily</h1>
            <div>
                <ul className='hidden cursor-pointer sm:flex justify-between items-center gap-4 sm:text-md md:text-xl lg:text-2xl'>
                    {Navlink.map(({id,names,path})=>(<Link to={path} key={id} className='hover:border rounded-full duration-100' >{names}</Link>))}
                </ul>
            </div>
            
            <div className='hidden sm:flex  justify-between gap-5'>
            <Link to='/cart' className='text-white hidden sm:block hover:scale-[1.1] hover:text-blue-700 transition-all'>My Cart<span className='bg-green-500 rounded-full font-bold p-1 text-center'>{items.length}</span></Link>
                <Link to="/signin" className='px-2 py-1 rounded-xl bg-gradient-to-r from-orange-400 to-orange-700 hover:scale-[1.1]'>signin</Link>
                <Link to="/account" className=' px-2 py-1 rounded-xl bg-gradient-to-r from-green-400 to-green-900 hover:scale-[1.1]'>Account</Link>
            </div>
            
            
            <div onClick={handleclick} className='sm:hidden border border-blue-100 hover:bg-green-700'>{show?<X size={45}/>:<Menu size={45}/>}</div>
        </div>
        {show&&<div className='text-white top-0 sm:hidden font-medium text-xl list-none flex flex-col items-center backdrop-blur-[50px] py-3 gap-3 duration-1000 sticky top-12'>
        <div className='flex flex-col gap-2'>
            {Navlink.map(({id,names,path})=>(<Link to={path} key={id} className='hover:scale-[1.2] hover:text-blue-700 transition-all'>{names}</Link>))}
        </div>
        <Link to='/cart' className='text-white hover:scale-[1.1] hover:text-blue-700 transition-all'>My Cart<span className='bg-green-500 rounded-full font-bold p-1 text-center'>{items.length}</span></Link>
        </div>}
        

  </>)}

export default Nav

