
import React from 'react'

export default function Input({ onChange, text }) {
  return (
    <div className='input_container'>
      <input type="text" placeholder='Search...' value={text}
        onChange={(e) => onChange(e.target.value)}
      />

    </div>
  )
}
