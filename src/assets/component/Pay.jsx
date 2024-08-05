import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AppContext } from './Contexthook';

const Pay = () => {
  const{items,setItems,select,setSelect,show,setShow}=useContext(AppContext);
  const [qr, setQr] = useState('');
  const [totalAmt, setTotalAmt] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState('');
  const[qty,setqty]=useState()
  const[selectiveqty,setSelectiveqty]=useState()

  useEffect(() => {
    const total = items.reduce((curr, acc) => curr + parseInt(acc.price * acc.qty), 0);
    setTotalAmt(total);
    setqty(items.reduce((curr,acc)=>(curr+parseInt(acc.qty)),0))
  }, [items]);
  useEffect(()=>{
    setTotal(select.reduce((curr,acc)=>(curr+parseInt(acc.price*acc.qty)),0))
    setSelectiveqty(select.reduce((curr,acc)=>(curr+parseInt(acc.qty)),0))
  },[select])

  useEffect(() => {
    const generateQr = async () => {
        setLoading('loading....');
        try {
          const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${!show?total:totalAmt}`;
          setQr(url);
          setLoading(null);
        } catch (error) {
          setLoading(error.message);
        }
      
    };

    generateQr();
  }, [totalAmt]);

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-5'>
        
          <div className='form'>
            <h1 className='font-semibold text-white text-2xl p-'>Delivery Address</h1>
            <div className='container '>
                <input type="text" required />
                <label>Name</label>
            </div>
            <div className='container'>
                <input type="text" required/>
                <label>Address</label>
            </div>
            <div className='container'>
                <input type="text" required/>
                <label>City</label>
            </div>
            <div className='container'>
                <input type="text" required/>
                <label>Ph-Number</label>
            </div>
            <div className='container'>
                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
         </div>
         <div className='w-[300px] h-[150px] text-white font-normal bg-slate-600 rounded-t-lg p-5 flex justify-around z-15 bottom-12'>
            <div>
              <p>delivery..................</p>
              <p>Total quantity...</p>
              <p>Gst............................</p>
              <p>total amt...............</p>
            </div>
            {!show?<div>
              
              <p>free delivery</p>
              <p>{selectiveqty} qty</p>
              <p>10%</p>
              <p>{total}</p>
            </div>:<div>
              
              <p>free delivery</p>
              <p>{qty} qty</p>
              <p>10%</p>
              <p>{totalAmt}</p>
            </div>}
          </div>
        <div className='flex flex-col items-center'>
          {loading?<h1>{loading}</h1>:<img src={qr} alt="" />}
          <img src="https://pay.google.com/about/static/images/logos/buy-with-gpay.png" alt="" width={300} />
        </div>
        <div className='text-white font-semibold p-5 flex flex-col justify-center items-center mb-10 md:w-[600px] gap-y-5'>
          <h1>This project serves as a practical example of integrating QR code functionality and form handling in a React application. It highlights the use of state management, side effects, and asynchronous operations to create a user-friendly interface.</h1>
          <p className='border p-3 bg-gradient-to-r from-orange-500 to-orange-800'>Please note: This project is intended for educational purposes only and demonstrates fundamental concepts in React development.</p>
          <p className='border p-3 bg-gradient-to-r from-orange-500 to-orange-800'>Feel free to reach out to me via email at <span className='text-gray-950 text-lg'>Rameshyaazhnila@gmail.com</span></p>
        </div>
        
      </div>    
      <div className='p-4 font-medium fixed bottom-0 bg-green-600 w-screen flex justify-center items-center z-10 '>
           <a href="mailto:Rameshyaazhnila@gmail.com" className='text-xl text-white cursor-pointer'>Rameshyaazhnila@gmail.com</a>
          </div>
    </>
  );
};

export default Pay;
