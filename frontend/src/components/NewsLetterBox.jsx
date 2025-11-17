import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <div className='text-center my-4'>
        <p className='text-2xl font-medium text-gray-500'>Subscribe  now and get 20% Off</p>
        <p className='mt-3 text-gray-400'>Let's Subscribe</p>
        <form onSubmit={onSubmitHandler} action="" className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-4 border pl-3'>
            <input type="email" placeholder='Enter Your email'  className='w-full sm:flex-1 outline-none'/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE NOW</button>
        </form>
    </div>
  )
}

export default NewsLetterBox