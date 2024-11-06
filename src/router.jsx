

import { createBrowserRouter } from "react-router-dom";
import Home from "./features/home/Home";
import Contact from "./features/contact/Contact";
import { Login } from "./features/login/Login";
import App from "./App";
import { AddContactForm } from "./features/contact/AddContactForm";
import { UserDetail } from "./component/UserDetail";
import TodoApp from "./features/todo/TodoApp";
import AddTodoForm from "./features/todo/AddTodoForm";
import TasbihOrJaap from "./features/Jaap And Tasbih/TasbihOrJaap";
import SignUp from "./features/login/SignUp";

export const router = createBrowserRouter([
     {
        path : "",
        element : <App/>,
        children: [
            {
                path : "",
                element : <Home/>,
            },
            {
                path : "contact",
                element : <Contact/>,
                  children:[

                    {
                        path :"showContact",
                        element:<UserDetail/>,
                    },
                    {
                        path :"addUser",
                        element:<AddContactForm/>,
                    },
                ]
            },

            {
                path : "todoApp",
                element : <TodoApp/>,
                children : [

                    {
                        path : 'addTodo',
                        element : <AddTodoForm/>
                    },
                ]
            },

            {
                path : "tasbih",
                element : <TasbihOrJaap/>,
            },  
            
            {
                path : "signUp",
                element : <SignUp/>
            },
            
        ]
    },
    {
        path : "login",
        element : <Login/>,
    },
])