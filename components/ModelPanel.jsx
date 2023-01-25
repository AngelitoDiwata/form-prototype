import React from 'react'

export default function ModelPanel({ dataModel }) {
    return (
        <div className="bg-gray-700 w-1/4 p-5 h-screen bg-neutral-500">
            <span className="text-3xl text-neutral-500">Model Structure</span>
            <div className="p-3 flex flex-col items-start justify-center space-y-2">
                {
                    Object.keys(dataModel).map((item) => {

                        return <button class="btn gap-2">
                            {item}
                            <div class="badge badge-primary">{dataModel[item]}</div>
                        </button>
                    })
                }
            </div>
        </div>
    )
}
