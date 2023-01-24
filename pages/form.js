import React, { useState, useEffect } from 'react'
import InputComponent from '../components/InputComponent'

export default function form() {
    const [query, setQuery] = useState('SELECT * FROM projmgm')
    const [data, setData] = useState([''])
    const [dataModel, setDataModel] = useState({})

    const setQueryData = (e) => {
        setQuery(e.target.value)
    }
    
    const setModel = (item, value = '') => {
        setDataModel((prevState) => ({ ...prevState, [item]: value }))
    }

    function APIRequest(queryString) {
        fetch(queryString, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: query }),
        }).then((res) => res.json()).then((data) => {
            setData(data)
        })
        
        setDataModel({})
    }

    const dataLength = () => {
        try {
            return data.length
        } catch (e) {
            return 0
        }
    }

    useEffect(() => {
        APIRequest(`/api/hello`)

        Object.keys(data[0]).forEach((item) => {
            setDataModel((prevState) => ({ ...prevState, [item]: '' }))
        })

    }, [])
    return (
        <div className="w-full flex flex-row items-center justify-between h-screen">
            <div className="w-1/4 bg-neutral-500 h-screen flex flex-col items-center justify-start">
                <textarea value={query} className="w-11/12 h-1/2 mt-5 rounded-lg p-5 text-3xl" onChange={setQueryData} />
                <button className="p-5 w-11/12 bg-teal-600 text-white rounded-lg my-5 shadow" onClick={() => APIRequest(`/api/hello`)}>Submit Query</button>
            </div>
            <div className="w-1/2 h-screen p-5 shadow flex flex-row items-center justify-center space-x-3">
                {
                    dataLength() > 0 && Object.keys(data[0]).map((item) => {
                        return <InputComponent onChange={(e) => setModel(item, e.target.value)} title={item} />
                    })
                }
            </div>
            <div className="w-1/4 p-5 h-screen bg-neutral-500">
                <span className="text-3xl text-white">Model Structure</span>
                <div className="p-5 flex flex-col items-start justify-center space-y-2">
                    {
                        Object.keys(dataModel).map((item) => {
                            return <div className='flex flex-row items-center justify-start w-full space-x-2'>
                                <div className='p-2 text-lg rounded bg-teal-700 text-white font-bold'>
                                    {item}
                                </div>
                                <div className='p-2 text-lg rounded bg-neutral-700 text-white font-bold'>
                                    {dataModel[item]}
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
