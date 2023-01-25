import React, { useState, useEffect } from 'react'
import FormPanel from '../components/FormPanel'
import InputComponent from '../components/InputComponent'
import ModelPanel from '../components/ModelPanel'
import QueryPanel from '../components/QueryPanel'

export default function query() {
    const [query, setQuery] = useState('SELECT * FROM t_users')
    const [data, setData] = useState([''])
    const [dataModel, setDataModel] = useState({})
    const [tableSpec, setTableSpec] = useState([''])

    const setQueryData = (e) => {
        setQuery(e.target.value)
    }

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
        })
        GetTableSpecs(queryString)
        setDataModel({})
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

    useEffect(() => {
        APIRequest(`/api/hello`)
        Object.keys(data[0]).forEach((item) => {
            setDataModel((prevState) => ({ ...prevState, [item]: '' }))
        })

    }, [])
    return (
        <div className="w-full flex flex-row items-start justify-between h-screen">
            <QueryPanel query={query} onChange={setQueryData} onSubmit={() => APIRequest(`/api/hello`)} />
            <FormPanel tableSpec={tableSpec} data={data} dataLength={dataLength} onChange={(e, item) => setModel(item, e.target.value)} />
            <ModelPanel dataModel={dataModel} />
        </div>
    )
}
