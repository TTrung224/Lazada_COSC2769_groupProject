import React, {useContext, useEffect} from 'react'
import AuthContextProvider from './Context/loginSessionContext'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Component/Shared/login';
import Navbar from './Component/Shared/navbar';
import {AuthContext} from './Context/loginSessionContext'
import ProductList from './Component/Shared/productList';
import Signup from './Component/Shared/signup';
import AdminCategory, { loadCategories } from './Page/adminCategory';
import AdminCategoryForm, { addNewCategory, loadCategory, loadCategoryWithEmptyFirst, saveCategory } from './Page/adminCategoryForm';
import 'bootstrap-icons/font/bootstrap-icons.css'

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
    {   
      path: "/admin/product-category",
      element: <AdminCategory />,
      loader: loadCategories
    },
    {
      path: "/admin/product-category/add",
      element: <AdminCategoryForm/>,
      action: addNewCategory
    },
    {
      path: "/admin/product-category/add/:categoryID",
      element: <AdminCategoryForm/>,
      loader: loadCategoryWithEmptyFirst,
      action: addNewCategory
    },
    {
      path: "/admin/product-category/:categoryID",
      element: <AdminCategoryForm/>,
      loader: loadCategory,
      action: saveCategory
    }
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
