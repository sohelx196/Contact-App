import React from "react";
import { Link, Outlet } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

function TodoApp() {
  return (
    <div>
      {/* <Link to="todos" className='m-4'>
            <button className='border rounded-lg border-white text-white p-2'>My Todos</button>
        </Link> */}

      <div>
        <h4 className="text-2xl text-slate-300">My Todos</h4>
      </div>

      <div className="my-6">
        <Link to="addTodo" className="">
          <button className="border rounded-lg border-white text-white p-3 hover:bg-gray-800 duration-500 hover:transition-all">
            <IoMdAdd />
          </button>
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default TodoApp;
