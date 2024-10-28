import React from 'react'
import { PropsUserProfile } from './PropsUserProfile'
import dp from '../assets/messi.jpeg'


export function  UserDetail() {
  return (
  
    <div className='flex w-full  '> 
  
        <PropsUserProfile profile={dp} username="Optimus" contact="99999"/>
        <PropsUserProfile profile={dp} username="Intersteller" contact="7"/>
        <PropsUserProfile profile={dp} username="Transformers" contact="100000"/>
        <PropsUserProfile profile={dp} username="Elon Musk" contact="420"/>
        <PropsUserProfile profile={dp} username="SpaceX" contact="9"/>

    </div>

  )
}

