import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from "../layout/main";
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Blog from '../Pages/Blog/Blog';
import Register from '../Pages/Register/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/blog",
        element:<Blog></Blog>
    },
    {
        path: "/registration",
        element: <Register></Register>,

    },
])

export default router;