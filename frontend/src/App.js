import AuthContextProvider, { AuthContext } from './Context/loginSessionContext'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import LoginPage from './Page/loginPage';
import SignupPage from './Page/signupPage';
import AdminSellerRequest from './Page/adminSellerRequest';
import SellerOrder from './Page/sellerOrder';
import SellerProduct from './Page/sellerProduct';
import SellerStatistic from './Page/SellerStatisticPage';
import CustomerProduct from './Page/customerProduct';
import CustomerOrder from './Page/customerOrder';
import CustomerCart from './Page/customerCart';
import Logout from './Component/Shared/logout';
import AdminCategory, { loadCategories } from './Page/adminCategory';
import AdminCategoryForm, { addNewCategory, saveCategory } from './Page/adminCategoryForm';
import { loadItems } from './Component/Customer/cart';
import ProductPage from './Page/ProductPage';
import ProductForm, { addProduct } from './Component/Seller/ProductForm';
import { loadProducts } from './Component/Seller/SellerProductList';
import { useContext } from 'react';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <CustomerProduct />
    },
    {
      path: "/product/:productId",
      element: <ProductPage />
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/cart",
      element: <CustomerCart />,
      loader: loadItems
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />
    },
    {
      path: "/order",
      element: <CustomerOrder />,
    },
    {
      path: "/admin",
      element: <><Navigate to={"seller-request"} /></>
    },
    {
      path: "/admin/seller-request",
      element: <AdminSellerRequest />
    },
    {
      path: "/admin/product-category",
      element: <AdminCategory />,
      loader: loadCategories
    },
    {
      path: "/admin/product-category/add",
      element: <AdminCategoryForm state="add" />,
      action: addNewCategory
    },
    {
      path: "/admin/product-category/add/:categoryId",
      element: <AdminCategoryForm state="add" />,
      action: addNewCategory
    },
    {
      path: "/admin/product-category/:categoryId",
      element: <AdminCategoryForm state="edit" />,
      action: saveCategory
    },
    {
      path: "/seller",
      element: <Navigate to="/seller/order" replace />,
    },
    {
      path: "/seller/order",
      element: <SellerOrder />,
    },
    {
      path: "/seller/product",
      element: <SellerProduct />
    },
    {
      path: "/seller/statistic",
      element: <SellerStatistic />
    },
    {
      path: "/seller/product/addproduct",
      element: <ProductForm state="add" />,
      action: addProduct
    },
    {
      path: "/seller/product/edit/:productId",
      element: <ProductForm state="edit" />
    }
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
