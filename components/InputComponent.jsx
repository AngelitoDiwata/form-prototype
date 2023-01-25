import React from 'react'

export default function InputComponent({type, title, onChange, className}) {
  const typeRef = {
    varchar: 'text',
    date: 'date'
  }
  return (
    <div className='flex flex-col items-start justify-start space-y-1 my-4 mx-1'>
        <span className='text-gray-500'>{title}</span>
        <input type="" placeholder={title} onChange={(e) => { onChange(e) }} className="input input-bordered input-primary w-full max-w-xs" />
    </div>
  )
}
