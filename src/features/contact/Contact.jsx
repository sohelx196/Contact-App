import React from "react";
import { UserDetail } from "../../component/UserDetail";
import { Outlet, NavLink} from "react-router-dom";

function Contact() {
  return (
    <div>

      <div className="flex">

      <div>
      <div className="text-center">
        <NavLink to="showContact" className={({isActive}) => isActive ? "contactLink" : ""}>
          <button className="bg-transparent text-slate-300 border border-y-white rounded-md p-3 m-3 hover:border-gray-800 hover:transition-all ">
            Show Contact 
          </button> 
        </NavLink>
      </div>
      </div>

      <div className="text-center">
        <NavLink to="addUser"  className={({isActive}) => isActive ? "contactLink" : ""}>
          <button className="bg-transparent text-slate-300 border border-y-white rounded-md p-3 m-3 hover:border-gray-800 hover:transition-all ">
            Add More 
          </button> 
        </NavLink>
      </div>
      </div>
    
      <div>
        <Outlet />
      </div>
    </div>

  );
}

export default Contact;
