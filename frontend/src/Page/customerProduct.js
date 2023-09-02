import React, { useEffect, useState } from 'react';
import ProductCategories from '../Component/Customer/productCategories';
import ProductFilter from '../Component/Customer/productFilter';
import ProductList from '../Component/Customer/productList';
import ProductSearchBar from '../Component/Customer/productSearch';
import Navbar from '../Component/Shared/navbar';
import './pageStyle.css';
import { getAllProducts } from '../Service/ProductAPI'
import Loader from '../Component/Shared/loader';
import { getCategories } from '../Service/CategoryAPI';


async function loadProducts(filters) {
    const res = await getAllProducts(filters)
    return res
}


export default function CustomerProduct() {
    const [isLoading, setIsLoading] = useState(true)
    const [maxItem, setMaxItem] = useState(0)
    const [productList, setProductList] = useState([])
    const [categoryList, setCategoryList] = useState([])

    // const [page, setPage] = useState(1)
    const [filters, setFilters] = useState({page: 1, search: "", minPrice: "", maxPrice: "", minDate: "", maxDate: "", attributes: [], category: null})

    useEffect(() => {
        setIsLoading(true)
        console.log(filters)
        loadProducts(filters).then((res) => {
            if (res) {
                if (res.status === 200) {
                    setProductList(res.data.products)
                    setMaxItem(res.data.count)
                }
            }
        }).finally(() => { setIsLoading(false) })
    }, [filters])

    useEffect(() => {
        setIsLoading(true)
        getCategories().then((res) => {
            if (res) {
                if (res.status === 200) {
                    setCategoryList(res.data)
                }
            }
        }).finally(() => { setIsLoading(false) })
    }, [])

    return (
        <>
            <Navbar />
            {isLoading ? <Loader /> : <></>}
            <div className='product-all-container'>
                <ProductSearchBar filters={filters} setFilters={setFilters}/>
                <ProductCategories filters={filters} setFilters={setFilters} categoryList={categoryList}/>
                <div className='product-mega'>
                    <ProductFilter filters={filters} setFilters={setFilters}/>
                    <ProductList productList={productList} maxItem={maxItem} filters={filters} setFilters={setFilters}/>
                </div>
            </div>
        </>
    )
}
