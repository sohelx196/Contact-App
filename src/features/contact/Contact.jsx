import React from "react";
import { UserDetail } from "../../component/UserDetail";
import { Outlet, Link } from "react-router-dom";

function Contact() {
  return (
    <div>

      
      <div>
        <UserDetail />
      </div>

      <div className="text-center">
        <Link to="addUser">
          <button className="bg-transparent text-slate-300 border border-y-white rounded-md p-3 m-3 hover:border-gray-800 hover:transition-all ">
            Add More 
          </button>
        </Link>
      </div>
    
      <div>
        <Outlet />
      </div>

    </div>
  );
}

export default Contact;
