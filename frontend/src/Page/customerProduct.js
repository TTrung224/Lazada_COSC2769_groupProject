import React, {useContext, useEffect} from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {AuthContext} from '../Context/loginSessionContext'
import { handleAuth } from '../Service/commonService';
import Navbar from '../Component/Shared/navbar';
import ProductList from '../Component/Customer/productList';
import ProductFilter from '../Component/Customer/productFilter';
import './pageStyle.css';
import ProductSearchBar from '../Component/Customer/productSearch';
import ProductCategories from '../Component/Customer/productCategories';

export default function CustomerProduct(){
    return(
        <>
            <Navbar/>
            <div className='product-all-container'>
                <ProductSearchBar/>
                <ProductCategories/>
                <div className='product-mega'>
                    <ProductFilter/>
                    <ProductList/>
                </div>
            </div>
        </>
    )
}
