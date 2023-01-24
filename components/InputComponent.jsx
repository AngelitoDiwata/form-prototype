import React from 'react'

export default function InputComponent({title, onChange, className}) {
  return (
    <div className='flex flex-col items-start justify-start space-y-1 '>
        <span className='text-gray-500'>{title}</span>
        <input onChange={(e) => { onChange(e) }} className="p-3 border-solid border outline-none focus:border-2 border-gray-500 rounded" type="text" placeholder={title}/>
    </div>
  )
}
