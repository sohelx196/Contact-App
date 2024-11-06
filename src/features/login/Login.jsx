import React from 'react'
import InputField from '../../component/InputField'
import { Link } from 'react-router-dom'

export function Login() {
  return (
    <div className='p-9 text-center  rounded-3xl m-4  h-screen  item-center flex flex-col justify-center'>
          <form action="" className=''> 
            <div className='my-6'>
              <h2 className='text-white text-4xl text-center font-extralight'>Login</h2>
            </div>
            
            
           <div className=''>
              <InputField type="text" placeholder="Username"/>
              <InputField type="password" placeholder="Password"/>
              <button className='text-white border p-2 rounded-lg m-3' onClick={() => {alert("Successfully Logged In")}}>Login</button>
            </div>

               
          </form>
    </div>
  )
}   