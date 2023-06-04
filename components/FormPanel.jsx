import React, { useEffect, useState } from 'react'
import InputComponent from './InputComponent'

export default function FormPanel({ tableSpec, data, dataLength, onChange, formTitle }) {

    const returnFieldType = (item) => {
        return tableSpec.filter((spec) => {
            return spec.Field === item
        })[0]
    }

    return (
        <div className="h-fit w-full flex flex-col items-start justify-start bg-neutral-700">
            <h1 className='py-2 text-4xl my-3 font-bold text-left'>{formTitle}</h1>
            <div className="w-full h-fit flex flex-wrap items-center m-auto">
                {
                    dataLength() > 0 && Object.keys(data[0]).filter((item) => {
                        return item.split('_')[1] !== 'id'
                    }).map((item, index) => {
                        return <InputComponent key={index} type={returnFieldType(item)} onChange={(e) => onChange(e, item)} title={item} />
                    })
                }
            </div>
        </div>
    )
}
