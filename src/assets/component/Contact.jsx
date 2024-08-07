import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] =useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "82f79b4e-7019-417c-b744-4d2fcf0e82b8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(()=>{
        setResult("")
      },2000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='flex justify-center items-center max-w-[330px] mx-auto'>
      <form onSubmit={onSubmit} className="formdata">
        <h1 className="font-semibold text-white text-2xl">Contact Us</h1>
        <div className="container">
          <input type="text" name="name" required />
          <label>Full Name</label>
        </div>
        <div className="container">
          <input type="text" name="email" required />
          <label>Email Address</label>
        </div>
        <div className="container">
          <textarea name="message" required />
          <label className="feedback w-[230px]">Share Your Feedback</label>
        </div>
        <div className="message">
          {result?<button className="sub">{result}</button>:<button type="submit" className="sub">Send Message</button>}
        </div>
      </form>
    </div>
  );
};

export default Contact;
