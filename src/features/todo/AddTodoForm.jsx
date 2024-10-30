import React from 'react'
import InputField from '../../component/InputField'

function AddTodoForm() {
  return (
    <div>
        
       <form action="#" className='rounded-lg w-max p-8 border border-blue-200'>
        <div>
          {/* <textarea name="" id="" className='bg-transparent border text-slate-100'></textarea> */}
           <InputField type="text" placeholder="Create Your Todo"/>
        </div>
        <div className='text-center m-3'>
            <button className='border border-gray-300 rounded-lg text-white p-1 text-xs'>Add Todo</button>
        </div>
       </form>

    </div>
  )
}

export default AddTodoForm