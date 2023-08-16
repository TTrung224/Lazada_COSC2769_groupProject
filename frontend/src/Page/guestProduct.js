import React from 'react';
import ProductCategories from '../Component/Customer/productCategories';
import ProductFilter from '../Component/Customer/productFilter';
import ProductList from '../Component/Customer/productList';
import ProductSearchBar from '../Component/Customer/productSearch';
import Navbar from '../Component/Shared/navbar';

export default function GuestProduct(){
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
