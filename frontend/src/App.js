import AuthContextProvider from './Context/loginSessionContext'
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
import AddProduct from './Component/Seller/AddProduct';
import EditProduct from './Component/Seller/EditProduct';
import { loadItems } from './Component/Customer/cart';
import ProductPage from './Page/ProductPage';

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
      element: <AdminCategoryForm />,
      action: addNewCategory
    },
    {
      path: "/admin/product-category/add/:categoryId",
      element: <AdminCategoryForm />,
      action: addNewCategory
    },
    {
      path: "/admin/product-category/:categoryId",
      element: <AdminCategoryForm />,
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
      element: <SellerProduct />,
    },
    {
      path:"/seller/statistic",
      element:<SellerStatistic/>
    },
    {
      path: "/seller/product/addproduct",
      element: <AddProduct />
    },
    {
      path: "/seller/product/edit/:productId",
      element: <EditProduct />
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
