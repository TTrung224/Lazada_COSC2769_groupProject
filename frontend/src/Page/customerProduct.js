import React, { useEffect, useState } from 'react';
import ProductCategories from '../Component/Customer/productCategories';
import ProductFilter from '../Component/Customer/productFilter';
import ProductList from '../Component/Customer/productList';
import ProductSearchBar from '../Component/Customer/productSearch';
import Navbar from '../Component/Shared/navbar';
import './pageStyle.css';
import { getAllProducts } from '../Service/ProductAPI'
import Loader from '../Component/Shared/loader';


async function loadProducts(page) {
    const res = await getAllProducts(page)
    return res
}


export default function CustomerProduct() {
    const [isLoading, setIsLoading] = useState(true)
    const [maxItem, setMaxItem] = useState(0)
    const [productList, setProductList] = useState([])

    const [page, setPage] = useState(1)

    useEffect(() => {
        loadProducts(page).then((res) => {
            if (res) {
                if (res.status === 200) {
                    setProductList(res.data.products)
                    setMaxItem(res.data.count)
                }
            }
        }).finally(() => { setIsLoading(false) })
    }, [page])


    return (
        <>
            <Navbar />
            {isLoading ? <Loader /> : <></>}
            <div className='product-all-container'>
                <ProductSearchBar />
                <ProductCategories />
                <div className='product-mega'>
                    <ProductFilter />
                    <ProductList productList={productList} maxItem={maxItem} page={page} setPage={setPage}/>
                </div>
            </div>
        </>
    )
}
