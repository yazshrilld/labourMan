import React from 'react'

const LocateIcon = () => {
  return (
    <>
        <div className='relative flex items-center text-gray-400'>
            <input 
                type="text" 
                name="" 
                id="" 
                placeholder='within 25 kilometers'
                className='pr-14 pl-10 py-2 rounded-md font-semibold placeholder-gray-500 text-black font border-none bg-slate-300 focus:border-none'
            />
            <div>
            <svg className='absolute -ml-8 top-2.5' width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.8" cy="7.8" r="7.05" stroke="#5E6366" stroke-width="1.5"/>
            <path d="M13.2002 13.2031L18.0002 18.0031" stroke="#5E6366" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            </div>
        </div>
        
    </>
  )
}

export default LocateIcon