import React, { useEffect } from 'react'
import InputField from '../../component/InputField'

function AddTodoForm() {



  return (
    <div>
        
       <form action="#" className='rounded-lg w-max p-8 border border-gray-50'>

        <div>
          {/* <textarea name="" id="" className='bg-transparent border text-slate-100'></textarea> */}
           <InputField type="text" placeholder="Create Your Todo" />
        </div>

        <div className='text-center m-3'>
            <button className='border border-gray-300 rounded-lg text-white  text-xs hover:border-gray-500 hover:transition-all p-2'>
              Add Todo
            </button>
        </div>
         
       </form>
    </div>
  )
}

export default AddTodoForm