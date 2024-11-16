import React from 'react'
import { useState ,useEffect } from 'react';
function UseEffect() {
    const [count, setCount] = useState(0);
    const [First, setFirst] = useState(0);

    useEffect(() => {
      return () => {
        alert("Count Was Changed");
      }
    }, []) //This will run always when it is render (without Dependency)

    useEffect(() => {
      return () => {
        alert("First Was Changed");
      }
    }, [First]);  //This will run when First was changed
    

  return (
    <>
      <button className='bg-white p-4 rounded-lg' onClick={()=>setFirst((First)=>First+1)}>Count is {First}</button>
    </>
  )
}

export default UseEffect