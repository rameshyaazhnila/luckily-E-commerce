import React from 'react'
import Contact from './Contact'
import Form from './Form'


const About = () => {
  return (
    <>
    <div>
      <div className='flex justify-center py-10 z-2'>
        <Form/>
      </div>
      
      <div className='flex justify-center py-10 z-2'>
        <Contact/>
      </div>
    </div>
    </>
  )
}

export default About