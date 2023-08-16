import React, {useContext, useEffect} from 'react'
import AuthContextProvider from './Context/loginSessionContext'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Component/Shared/login';
import Navbar from './Component/Shared/navbar';
import {AuthContext} from './Context/loginSessionContext'
import ProductList from './Component/Shared/productList';
import Signup from './Component/Shared/signup';
import AdminCategory, { loadCategories } from './Component/Admin/AdminCategory';
import Admin from './Component/Admin/Admin';
import AdminAddCategory, { addNewCategory, loadCategory, loadCategoryWithEmptyFirst, saveCategory } from './Component/Admin/AdminAddCategory';

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
      path: "/admin",
      element: <><Admin/></>,
      children: [
        {
          path: "category",
          element: <AdminCategory />,
          loader: loadCategories
        },
        {
          path: "category/add",
          element: <AdminAddCategory/>,
          action: addNewCategory
        },
        {
          path: "category/add/:categoryID",
          element: <AdminAddCategory/>,
          loader: loadCategoryWithEmptyFirst,
          action: addNewCategory
        },
        {
          path: "category/:categoryID",
          element: <AdminAddCategory/>,
          loader: loadCategory,
          action: saveCategory
        }
      ]
    },
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
