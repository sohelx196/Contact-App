import React from "react";

import { Outlet, NavLink} from "react-router-dom";


function Contact() {
  return (
    <div>

      <div className="flex">
      <div>
      <div className="text-center">
        <NavLink to="showContact">
          <button className="bg-transparent text-slate-300 border border-y-white rounded-md p-3 m-3 hover:border-gray-800 hover:transition-all ">
            Show Contact
          </button> 
        </NavLink>
      </div>
      </div>

      <div className="text-center">
        <NavLink to="addUser">
          <button className="bg-transparent text-slate-300 border border-y-white rounded-md p-3 m-3 hover:border-gray-800 hover:transition-all ">
            Add More 
          </button> 
        </NavLink>


      </div>
      
      </div>
    
      <div className="my-6">
        <Outlet />
      </div>
    </div>

  );
} 

export default Contact;
