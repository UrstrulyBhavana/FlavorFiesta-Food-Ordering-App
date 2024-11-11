import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
     <h1 className='font-bold text-3xl p-4 m-4'>Contact Us Page</h1>
     <form className='flex flex-col p-4 w-full  max-w-xs'>
        <input type='text' className='border border-black p-2 mb-4 rounded-md' placeholder='Enter Your Name'/>
        <input type='text' className='border border-black p-2 mb-4 rounded-md' placeholder='Message'/>
      
        <button className='border border-black  font-bold rounded-lg p-2 m-2 bg-amber-300 text-xl'>Submit</button>
     </form>
    </div>
  );
};

export default Contact;