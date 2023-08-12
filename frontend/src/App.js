import React, {useContext, useEffect} from 'react'
import AuthContextProvider from './Context/loginSessionContext'
import { BrowserRouter, createBrowserRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import Login from './Page/login';
import Signup from './Page/signup';
import GuestProduct from './Page/guestProduct';
import AdminSellerRequest from './Page/adminSellerRequest';
import SellerOrder from './Page/sellerOrder';
import CustomerProduct from './Page/customerProduct';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><GuestProduct/></>,
    },
    {
      path: "/login",
      element: <><Login/></>,
    },
    {
      path: "/signup",
      element: <><Signup/></>,
    },
    {
      path: "/customer",
      element: <><CustomerProduct/></>,
    },
    {
      path: "/admin",
      element: <AdminSellerRequest/>,
    },
    {
      path: "/seller",
      element: <SellerOrder/>,
    },
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
