import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Boxhehe from "./components/Boxhehe";
import Test from "./components/test";
import Brand from "./page/Admin/brands/BrandTable";
import ListBrand from "./page/Admin/brands/ListBrand";
import ListCheckoutAdmin from "./page/Admin/list-checkout/ListCheckoutAdmin";
import Container from "./page/Admin/TableProductLine/TableProductLine";
import ListUser from "./page/Admin/user/ListUser";
import AuthLayout from "./page/Auth/AuthLayout";

import Login from "./page/Auth/Login/Login";
import Register from "./page/Auth/Register/Register";
import Cart from "./page/Cart/Cart";
import ListCheckout from "./page/checkout/ListCheckout";

import ClientLayout from "./page/ClientLayout/ClientLayout";
import AdminLayout from "./page/Product/AdminLayout";
import LisProduct from "./page/Products/ListProduct/LisProduct";
import ProductDetail from "./page/Products/ProductDetail/ProductDetail";
import CartContext from "./store/CartContext";
import SearchContext from "./store/SearchContext";
import UserContext from "./store/UserContext";

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <UserContext>
        <CartContext>
          <SearchContext>


            <Routes>
              <Route
                path="/dien-thoai"
                element={
                  <ClientLayout>
                    <LisProduct />
                  </ClientLayout>
                }
              ></Route>
              <Route
                path="/dien-thoai/:product_id"
                element={
                  <ClientLayout>
                    <ProductDetail />
                  </ClientLayout>
                }
              ></Route>
              <Route
                path="/admin/product"
                element={
                  <AuthLayout>
                    <AdminLayout>
                      <Container></Container>
                    </AdminLayout>
                  </AuthLayout>
                }
              ></Route>
              <Route
                path="/admin/brands"
                element={
                  <AuthLayout>
                    <AdminLayout>
                      <ListBrand></ListBrand>
                    </AdminLayout>
                  </AuthLayout>
                }
              ></Route>

              <Route
                path="/admin/users"
                element={
                  <AuthLayout>
                    <AdminLayout>
                      <ListUser></ListUser>
                    </AdminLayout>
                  </AuthLayout>
                }
              ></Route>

              <Route
                path="/admin/order"
                element={
                  <AuthLayout>
                    <AdminLayout>
                      <ListCheckoutAdmin />
                    </AdminLayout>
                  </AuthLayout>
                }
              ></Route>

              <Route
                path="/login"
                element={
                  <ClientLayout>
                    <Login />
                  </ClientLayout>
                }
              ></Route>
              <Route
                path="/register"
                element={
                  <ClientLayout>
                    <Register />
                  </ClientLayout>
                }
              ></Route>
              <Route
                path="/cart"
                element={

                  <ClientLayout>
                    <Cart />
                  </ClientLayout>

                }
              ></Route>
              <Route
                path="/checkout"
                element={

                  <Boxhehe />

                }
              ></Route>
            </Routes>
          </SearchContext>
        </CartContext>
      </UserContext>
    </BrowserRouter>
  );
}
