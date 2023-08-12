import React, {useContext, useEffect} from 'react'
import AuthContextProvider from './Context/loginSessionContext'
import { BrowserRouter, createBrowserRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import Login from './Component/Shared/login';
import Navbar from './Component/Shared/navbar';
import {AuthContext} from './Context/loginSessionContext'
import ProductList from './Component/Shared/productList';
import Signup from './Component/Shared/signup';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><ProductList/></>,
    },
    {
      path: "/login",
      element: <><Navbar/><Login/></>,
    },
    {
      path: "/signup",
      element: <><Navbar/><Signup/></>,
    },
    // {
    //   path: "/admin",
    //   element: <Products />
    // },
    // {
    //   path: "/seller",
    //   element: <MyAccount />,
    //   loader: loadMyAccount,
    // },
    // {
    //   path: "/customer",
    //   element: <MyAccountEdit />,
    //   loader: loadMyAccount,
    //   action: saveMyAccount,
    // },
  ]);


  return (
    <div className="App">
      <AuthContextProvider>
        <RouterProvider router={router}>

        </RouterProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
