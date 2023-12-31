import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";
import BuyNow from "./views/BuyNow/BuyNow";

import { createBrowserRouter, RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:'/buy/:_id',
        element:<BuyNow/>
    },
  

])

root.render(
    <>
    <RouterProvider router = {router} />
    </>
)

