import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Test from './components/test';
import Container from './page/Admin/TableProductLine/TableProductLine';

import Login from './page/Auth/Login/Login';
import Register from './page/Auth/Register/Register';
import Cart from './page/Cart/Cart';
import ListCheckout from './page/checkout/ListCheckout';

import ClientLayout from './page/ClientLayout/ClientLayout';
import AdminLayout from './page/Product/AdminLayout';
import LisProduct from './page/Products/ListProduct/LisProduct';
import ProductDetail from './page/Products/ProductDetail/ProductDetail';
import CartContext from './store/CartContext';
import UserContext from './store/UserContext';

export default function RoutesComponent() {
    
    return (
        <BrowserRouter>
        <UserContext>
            <CartContext>

          
            <Routes >
                <Route path='/dien-thoai' element={
                    <ClientLayout>
                        <LisProduct />
                    </ClientLayout>
                }>
                </Route>
                <Route path='/dien-thoai/:product_id' element={
                    <ClientLayout>
                        <ProductDetail />
                    </ClientLayout>
                }>
                </Route>
                <Route path='/admin' element={
                    <AdminLayout>
                        <Container></Container>
                    </AdminLayout>
                }>
                </Route>
                <Route path='/login' element={
                    <ClientLayout>
                        <Login />   
                    </ClientLayout>
                }>
                </Route>
                <Route path='/register' element={
                    <ClientLayout>
                        <Register />   
                    </ClientLayout>
                }>
                </Route>
                <Route path='/cart' element={
                    <ClientLayout>
                        <Cart />   
                    </ClientLayout>
                }>
                </Route>
                <Route path='/checkout' element={
                    <ClientLayout>
                        <ListCheckout />   
                    </ClientLayout>
                }>
                </Route>
            </Routes>
            </CartContext>
            </UserContext>
        </BrowserRouter>
    )
}
