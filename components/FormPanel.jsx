import React from 'react'
import InputComponent from './InputComponent'

export default function FormPanel({tableSpec, data, dataLength, onChange}) {
    
    return (
        <div className="h-screen w-1/2 flex flex-col items-start justify-start bg-neutral-700">
            <input placeholder='Form title here...' className='rounded-lg py-2 px-5 text-4xl m-auto my-3 font-bold w-11/12' />
            <div className="w-full h-fit p-5 shadow flex flex-wrap items-center justify-start">
                {
                    dataLength() > 0 && Object.keys(data[0]).map((item) => {
                        return <InputComponent onChange={(e) => onChange(e, item)} title={item} />
                    })
                }
            </div>
        </div>
    )
}
