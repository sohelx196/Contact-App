import { Input } from 'postcss'
import React from 'react'
import { InputForm } from './InputForm'


function InputFiledCalling() {
  return (
    <div>
      <InputForm key="1" text="Name" type="text" placeholder="Enter Your Name"/>
      <InputForm key="1" text="Name" type="text" placeholder="Enter Your Name"/>
    </div>
  )
}

export default InputFiledCalling