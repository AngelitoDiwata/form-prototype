import React from 'react'

export default function ModelPanel({ dataModel, tableName, formTitle, inQuery }) {

    const queryBuilder = () => {
        return `INSERT INTO ${tableName} (${getModelData()}) VALUES (${getModelData(true)})`

    }

    const getModelData = (value = false) => {
        return Object[value ? 'values' : 'keys'](dataModel).map((item) => {
            return item
        }).toString().replaceAll(',', ', ')
    }

    return (
        <div className="bg-neutral-800 w-1/3 pt-5 px-5 h-screen bg-neutral-500">
            <div className='flex flex-col space-y-1 items-start justify-start'>
                <span>Form title</span>
                <h1 className='font-bold text-2xl'>{formTitle}</h1>
                <textarea value={inQuery} readOnly className="textarea resize-none textarea-primary h-full w-full rounded-t-lg text-secondary" placeholder="Query" />
            </div>
            <div style={{ "max-height": '55%' }} className="w-full overflow-scroll py-10 flex flex-row flex-wrap items-start justify-center space-x-2 space-y-2">
                {
                    Object.keys(dataModel).map((item, index) => {

                        return <button key={index} className="btn gap-2 grow">
                            {item}
                            <div className="badge badge-primary">{dataModel[item]}</div>
                        </button>
                    })
                }
            </div>
            <div style={{ "max-height": '43%' }} className="h-1/2 w-full rounded-t-lg text-white">
                <textarea value={queryBuilder()} onChange={() => { }} className="textarea resize-none textarea-primary h-full w-full rounded-t-lg text-secondary" placeholder="Query" />
            </div>
        </div>
    )
}
