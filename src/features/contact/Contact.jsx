import React from 'react'
import { UserDetail } from '../../component/UserDetail'

function Contact(props) {
    const addContact = props.addContact;
  return (
    <div>
    <button className='border border-blue-400 bg-blue-400 p-2 text-white'>{addContact}</button>
        <div>
        <UserDetail/>
        </div>

    </div>
  )
}

export default Contact