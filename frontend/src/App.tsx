import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Layout from "./components/layot/Layout";
import Register from "./pages/register/Register";
import './index.scss';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App
