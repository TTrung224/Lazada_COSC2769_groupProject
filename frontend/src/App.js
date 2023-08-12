import React, {useContext, useEffect} from 'react'
import AuthContextProvider from './Context/loginSessionContext'
import { BrowserRouter, createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Login from './Component/Shared/login';
import Navbar from './Component/Shared/navbar';
import {AuthContext} from './Context/loginSessionContext'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/></>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    // {
    //   path: "/signup",
    //   element: <Signup/>
    // },
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
