import React from 'react'
import {  NavLink} from 'react-router-dom'

function Menu() {
  return (
    <div>
        <ul className="text-white text-center mt-11 flex flex-col items-center">
                 <li className="m-6"><NavLink to="home"  className={({isActive}) => isActive ? "Active" : ""}>Home</NavLink></li>
                 <li className="m-6"><NavLink to="contact" className={({isActive}) => isActive ? "Active" : ""}> Contact</NavLink></li>
                 <li className="m-6"><NavLink to="login" className={({isActive}) => isActive ? "Active" : ""}>Login</NavLink></li>
        </ul>
    </div>
  )
}

export default Menu