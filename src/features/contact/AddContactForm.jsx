import React from 'react'
import InputField from '../../component/InputField'

export function AddContactForm() {
  return (
    <>
       <form action="#">
            <div className='border border-white rounded-xl  text-white w-max p-6 shadow-lg shadow-slate-500 bg-slate-900 '>
                <div>
                    <h2 className='text-center text-xl text-gray-200 font-extralight'>Add Contact</h2>
                </div>
                <div className='m-5'>
                    <InputField type="text" placeholder="Enter Your Name"/>
                    <InputField type="number" placeholder="Enter Your Contact"/>
                </div>
            </div>
       </form>
    </>
  )
}