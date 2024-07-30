import React from 'react'
import products from './product'

const Homepage = ({items,setitems}) => {

    const Addcart=(receive)=>{
        setitems([...items,receive])
    }
    const Removecart=(receive)=>{
        setitems(items.filter(curr=>curr.id!=receive.id))
    }

  return (
    <>
        <div>
            <ul className='bg-black flex flex-wrap items-center justify-center gap-y-8'>
                {products.map((product)=><li key={product.id} className='text-white font-bold flex flex-col items-center'>
                    <div className='h-[300px] w-[200px] md:h-[400px] md:w-[300px] lg:h-[500px] lg:w-[400px]'>
                        <img src={product.image} alt="dress"className='w-[100%] h-[100%] object-cover'/>
                    </div>
                    <div className='py-2'>
                        <h1>{product.brand}</h1>
                        <h2>price:${product.price}</h2>
                        <p>{product.delivery}</p>
                    </div>
                    
                    {items.includes(product)?<button className='bg-red-600 p-2 rounded-[9px]' onClick={()=>Removecart(product)}>remove cart</button>:<button className='bg-green-700 p-2 rounded-[9px]' onClick={()=>Addcart(product)}>Add to Cart</button>}
                </li>)}
            </ul>
        </div>
    </>
    
  )
}

export default Homepage



// npm install -D tailwindcss postcss autoprefixer
