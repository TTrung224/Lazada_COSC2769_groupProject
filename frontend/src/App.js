import React, {useContext, useEffect} from 'react'
import AuthContextProvider from './Context/loginSessionContext'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Login from './Page/login';
import Signup from './Page/signup';
import GuestProduct from './Page/guestProduct';
import GuestCart from './Page/guestCart';
import AdminSellerRequest from './Page/adminSellerRequest';
import AdminCategory from './Page/adminCategory';
import SellerOrder from './Page/sellerOrder';
import SellerProduct from './Page/sellerProduct';
import CustomerProduct from './Page/customerProduct';
import CustomerOrder from './Page/customerOrder';
import CustomerCart from './Page/customerCart';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <GuestProduct/>,
    },    
    {
      path: "/guest/cart",
      element: <GuestCart/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/customer",
      element: <Navigate to="/customer/product" replace />,
    },
    {
      path: "/customer/product",
      element: <CustomerProduct/>,
    },
    {
      path: "/customer/order",
      element: <CustomerOrder/>,
    },
    {
      path: "/customer/cart",
      element: <CustomerCart/>,
    },
    {
      path: "/admin",
      element: <Navigate to="/admin/seller-request" replace />,
    },
    {
      path: "/admin/seller-request",
      element: <AdminSellerRequest/>,
    },
    {
      path: "/admin/product-category",
      element: <AdminCategory/>,
    },
    {
      path: "/seller",
      element: <Navigate to="/seller/order" replace />,
    },
    {
      path: "/seller/order",
      element: <SellerOrder/>,
    },
    {
      path: "/seller",
      element: <SellerProduct/>,
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
