import React from 'react'
import "./loading.css"

const Loading = () => {
    return (
        <div className=" h-100 w-100 loading">

            <svg width="205" height="250" viewBox="0 0 40 50">
                <circle cx="20" cy="20" r="10" stroke="#008fb3" strokeWidth="1" fill="none"
                 />
                <text fill="#fff" x="5" y="47">Loading</text>
            </svg>

        </div>
    )
}

export default Loading
