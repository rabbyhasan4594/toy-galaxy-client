import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from "../layout/main";
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Blog from '../Pages/Blog/Blog';
import Register from '../Pages/Register/Register';
import AllToys from '../Pages/AllToys/AllToys';
import AddAToy from '../Pages/AddAToy/AddAToy';
import MyToys from '../Pages/MyToys/MyToys';
import ViewDetails from '../Pages/ViewDetails/ViewDetails';

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
    {
        path: "/allToys",
        element: <AllToys></AllToys>,

    },
    {
        path: "/addAToy",
        element: <AddAToy></AddAToy>,

    },
    {
        path: "/myToys",
        element: <MyToys></MyToys>,

    },
    {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/viewDetails/${params.id}`)

    },
])

export default router;