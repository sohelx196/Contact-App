import React from 'react'

function InputField({type,placeholder}) {
  return (
    <div>
        <input type={type} placeholder={placeholder}  className='border p-3 rounded text-white bg-transparent m-2 ' />
    </div>
  )
}

export default InputField