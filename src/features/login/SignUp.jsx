import React from 'react'
import InputField from '../../component/InputField'

function SignUp() {
  return (
    <div>
        <form action="#">
            <InputField type="text" placeholder="Enter Your Name" />
            <InputField type="email" placeholder="Email" />
            <InputField type="password" placeholder="Create Password" />
            <InputField type="password" placeholder="Conform Password" />

            <div>
                <button className='text-white border p-2 rounded-lg m-3'>Create Account</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp