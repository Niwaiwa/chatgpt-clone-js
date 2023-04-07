import React from 'react'

export default function Translation({ doStuff, setInput, result }) {
  return (
    <div>
        <div>
            <textarea
                className='text-area'
                cols={70}
                rows={20}
                onChange={(e) => setInput(e.target.value)}
            >
            </textarea>
        </div>
        <div>
            <button className='action-btn' onClick={doStuff}>DO YOU STUFF!</button>
        </div>
        <div>
            <h3 className='result-text'>{result.length > 0 ? result : ""}</h3>
        </div>
    </div>
  )
}
