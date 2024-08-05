import React from 'react'

const Confirm = ({items,setitems}) => {
  return (
    <div className='text-white'>
        {items.map((item)=><ul>
            <li>{item.id}</li>
            <li>{item.price}</li>
            <li><img src={item.image} alt="" /></li>
        </ul>)}
    </div>
  )
}

export default Confirm