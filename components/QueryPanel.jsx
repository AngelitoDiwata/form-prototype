import React from 'react'

export default function QueryPanel({ query, onSubmit, onChange }) {
    return (
        <div className="w-1/4 mx-3 bg-neutral-500 h-screen flex flex-col items-end justify-start space-y-3">
            <textarea value={query} className="resize-none textarea textarea-primary w-full text-2xl h-1/2 mt-3 bg-neutral-900 text-secondary" placeholder="Bio" onChange={(e) => onChange(e)}  />
            <button onClick={(e) => onSubmit(e)} className="btn btn-secondary">Submit Query</button>
        </div>
    )
}
