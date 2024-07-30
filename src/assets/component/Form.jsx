import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <h1 className='font-semibold text-white text-2xl p-'>create Account</h1>
        <div className='container'>
            <input type="text" required />
            <label>username</label>
        </div>
        <div className='container'>
            <input type="text" required/>
            <label>email</label>
        </div>
        <div className='container'>
            <input type="password" required/>
            <label>password</label>
        </div>
        <div className='container'>
            <input type="password" required/>
            <label>confirm password</label>
        </div>
        <div className='container'>
            <div className='submit'>
                <button>submit</button>
            </div>
            
            
        </div>
        
    </div>
  )
}

export default Form