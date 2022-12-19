import React from 'react'

const PlainInput = ({
    value,
    onChange,
    className,
    label,
    id,
    name,
    type,
  }) => {
  return (
    <>
    <div className=''>
        <label 
            className=''
            htmlFor={id}>
            {label}
        </label>
        <input 
            className='block border border-fuchsia-600 rounded-xl px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 mb-5'
            type={type ?? "text"}
            id={id} 
            value={value}
            onChange={onChange}
            name={name}
        />
    </div>
    </>
  )
}

export default PlainInput