import React, { useEffect, useState } from 'react'
import InputComponent from '../components/InputComponent'

export default function formmatter() {
    const [formData, setFormData] = useState({
        title: "Create new product",
        fields: [
            {
                label: "username",
                type: "text",
                validations: {
                    notEmpty: true
                }
            },
            {
                label: "password",
                type: "password",
                validations: {
                    notEmpty: true
                }
            },
            {
                label: "birthday",
                type: "date",
                validations: {
                    notEmpty: true
                }
            }
        ],
        actionQuery: ""
    })


    const [dataModel, setDataModel] = useState({})

    const setModel = (item, value = '') => {
        setDataModel((prevState) => ({ ...prevState, [item]: value }))
    }

    const inputComponents = {
        text: InputComponent,
        password: InputComponent,
        date: InputComponent,
    }

    const renderFormData = (data) => {
        return (
            <React.Fragment>
                {
                    data.fields.map((field, index) => {
                        const Component = inputComponents[field.type]
                        return <Component type={field.type} title={field.label} onChange={(e) => setModel(field.label, e.target.value)} />
                    })
                }
            </React.Fragment>
        )
    }

    return (
        <div className='w-fit max-w-2xl py-5 m-auto'>
            <h1 className='font-bold text-xl'>{formData.title}</h1>
            <form className="w-full h-fit flex flex-wrap items-center m-auto">
                {
                    renderFormData(formData)
                }
            </form>
        </div>
    )
}
