import React from 'react';
import ProductCategories from '../Component/Customer/productCategories';
import ProductFilter from '../Component/Customer/productFilter';
import ProductList from '../Component/Customer/productList';
import ProductSearchBar from '../Component/Customer/productSearch';
import Navbar from '../Component/Shared/navbar';
import './pageStyle.css';

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
