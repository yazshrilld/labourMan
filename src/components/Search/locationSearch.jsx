import React from 'react'

const SearchWithIcon = () => {
  return (
    <>
        <div className='flex justify-between overflow-hidden rounded-2xl bg-fuchsia-500 shadow-sm'>
            <input 
                className='block w-[20rem] flex-1 py-22 px-3 focus:outline-none'
                type="search" 
                name="" 
                id="" 
                placeholder='What are you looking for?'
            />
            <span className='m-2 inline-flex cursor-pointer items-center rounded-sm bg-transparent p-2 hover:bg-fuchsia-200'>
                <svg className='text fill-white' width="25" height="25" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.8" cy="7.8" r="7.05" stroke="#5E6366" stroke-width="1.5"/>
                <path d="M13.2002 13.2031L18.0002 18.0031" stroke="#5E6366" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </span>

        </div>
        
    </>
  )
}

export default SearchWithIcon