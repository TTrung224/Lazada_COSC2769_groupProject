import AuthContextProvider from './Context/loginSessionContext'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import LoginPage from './Page/loginPage';
import SignupPage from './Page/signupPage';
import GuestProduct from './Page/guestProduct';
import GuestCart from './Page/guestCart';
import AdminSellerRequest, { loadSellers } from './Page/adminSellerRequest';
import SellerOrder from './Page/sellerOrder';
import SellerProduct from './Page/sellerProduct';
import CustomerProduct from './Page/customerProduct';
import CustomerOrder from './Page/customerOrder';
import CustomerCart from './Page/customerCart';
import Logout from './Component/Shared/logout';
import AdminCategory, { loadCategories } from './Page/adminCategory';
import AdminCategoryForm, { addNewCategory, loadCategory, saveCategory } from './Page/adminCategoryForm';
import AddProduct from './Component/Seller/AddProduct';
import EditProduct from './Component/Seller/EditProduct';
import { loadItems } from './Component/Customer/cart';
import ProductPage from './Page/ProductPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <GuestProduct />
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/guest/cart",
      element: <GuestCart />,
      loader: loadItems
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/customer",
      element: <Navigate to="/customer/product" replace />,
    },
    {
      path: "/customer/product",
      element: <CustomerProduct />
    },
    {
      path: "/customer/order",
      element: <CustomerOrder />,
    },
    {
      path: "/customer/cart",
      element: <CustomerCart />,
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
      path: "/seller/product/addproduct",
      element: <AddProduct />
    },
    {
      path: "/seller/product/editproduct",
      element: <EditProduct />
    },
    {
      path: "/product/:productId",
      element: <ProductPage />
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
