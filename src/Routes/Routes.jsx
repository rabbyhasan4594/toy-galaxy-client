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
import PrivateRoute from './PrivateRoute';
import UpdateToyModal from '../Pages/MyToys/UpdateToyModal';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                errorElement: <ErrorPage />,
            },
        ]
    },
    {
        path:"/login",
        element:<Login></Login>,
        errorElement: <ErrorPage />,
    },
    {
        path:"/blog",
        element:<Blog></Blog>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/registration",
        element: <Register></Register>,
        errorElement: <ErrorPage />,

    },
    {
        path: "/allToys",
        element: <AllToys></AllToys>,
        errorElement: <ErrorPage />,

    },
    {
        path: "/addAToy",
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>,
        errorElement: <ErrorPage />,

    },
    {
        path: "/myToys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
        errorElement: <ErrorPage />,
        
        

    },
    {
        path: "/update/:id",
        element: <UpdateToyModal></UpdateToyModal>,
        errorElement: <ErrorPage />,
        loader: ({params}) => fetch(`http://toy-galaxy-server-lake.vercel.app/update/${params.id}`)

    },

    {
        path: "/viewDetails/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        errorElement: <ErrorPage />,
        loader: ({params}) => fetch(`http://toy-galaxy-server-lake.vercel.app/viewDetails/${params.id}`)

    },
])

export default router;