

import { createBrowserRouter } from "react-router-dom";
import Home from "./features/home/Home";
import Contact from "./features/contact/Contact";
import { Login } from "./features/login/Login";
import App from "./App";
import { AddContactForm } from "./features/contact/AddContactForm";
import { UserDetail } from "./component/UserDetail";

export const router = createBrowserRouter([
     {
        path : "/",
        element : <App/>,
        children: [
            {
                path : "home",
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
            
        ]
    },
    {
        path : "login",
        element : <Login/>,
    },
])





    // {
    //     path: "/",
    //     element: <Home/>
    // },
    
    // {
    //     path: "contact",
    //     element: <Contact/> ,
    // },
    // {
    //     path: "login",
    //     element: <Login/>
    // }
        
