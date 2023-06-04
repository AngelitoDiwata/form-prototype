import React, { useEffect } from 'react'

export default function InputComponent({ type, title, onChange }) {
  const typeRef = {
    varchar: 'text',
    date: 'date',
    timestamp: 'date',
    double: 'number',
    tinyint: 'number'
  }

  const returnType = () => {
    try {
      return typeRef[Object.keys(typeRef).filter((item) => {
        return type.Type.includes(item)
      })[0]]
    } catch (_) {
      return null
    }
  }

  return (
    <div className='flex grow flex-col items-start justify-start space-y-1 my-2 mx-1'>
      <span className='text-gray-500'>{title.replaceAll('_', ' ')}</span>
      <input type={returnType()} placeholder={title} onChange={(e) => { onChange(e) }} className="input input-bordered input-primary w-full max-w-xs" />
    </div>
  )
}
