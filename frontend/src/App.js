import './App.css';
import React from 'react'
import AuthContextProvider from './Context/loginSessionContext'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './Component/Shared/navbar.js';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/></>,
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
        <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
}

export default App;
