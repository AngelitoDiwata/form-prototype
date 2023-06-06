import React, { useEffect } from 'react'

export default function InputComponent({ type, title, onChange }) {

  return (
    <div className='flex grow flex-col items-start justify-start space-y-1 my-2 mx-1'>
      <span className='text-gray-500'>{title.replaceAll('_', ' ')}</span>
      <input type={type} placeholder={title} onChange={(e) => { onChange(e) }} className="input input-bordered input-primary w-full max-w-xs" />
    </div>
  )
}
