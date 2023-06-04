import React, { useEffect, useState } from 'react'
import FormPanel from './FormPanel'

export default function FormComponent({ query, title }) {
    const [data, setData] = useState([''])
    const [dataModel, setDataModel] = useState({})
    const [tableSpec, setTableSpec] = useState([''])

    useEffect(() => {
        APIRequest(`api/hello`)
    }, [])

    const setModel = (item, value = '') => {
        setDataModel((prevState) => ({ ...prevState, [item]: value }))
    }

    const APIRequest = (queryString) => {
        fetch(queryString, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: query }),
        }).then((res) => res.json()).then((data) => {
            setData(data)

            GetTableSpecs(queryString)
        })
    }

    const dataLength = () => {
        try {
            return data.length
        } catch (e) {
            return 0
        }
    }

    const GetTableSpecs = (queryString) => {
        fetch(queryString, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: `SHOW COLUMNS FROM ${query.split(' ').reverse()[0]};` }),
        }).then((res) => res.json()).then((data) => {
            setTableSpec(data)
        })
        return
    }

    const submitDataModel = () => {
        console.log(dataModel)
    }

    return (
        <div className='w-11/12 md:w-1/2 m-auto'>
            <FormPanel formTitle={title} tableSpec={tableSpec} data={data} dataLength={dataLength} onChange={(e, item) => setModel(item, e.target.value)} />
            <div className='w-full flex flex-row items-center justify-end space-x-2 px-1 my-3'>
                <button onClick={submitDataModel} className="btn btn-active btn-primary">Submit</button>
                <button className="btn btn-active btn-neutral">Cancel</button>
            </div>
        </div>
    )
}
