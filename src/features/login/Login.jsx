import React from 'react'
import { Button } from '../../component/Button'
import InputField from '../../component/InputField'

function Login() {
  return (
    <div className='  p-9 text-center  rounded-3xl m-4 w-full h-max bg-slate-500'>
          <form action="" className=''> 
            <div className=''>
              <InputField type="text" placeholder="Enter Your Name"/>
              <InputField type="number" placeholder="Enter Your Number"/>
            </div>

            <div>
                 <Button></Button>    
            </div>           
          </form>
    </div>
  )
}

export default Login   