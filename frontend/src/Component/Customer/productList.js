import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import img1 from "../../Asset/test_product_images/1.jpg";
import Loader from '../Shared/loader';
import '../componentStyle.css';
import PaginationList, { paginateArray } from '../Shared/Pagination';

function ProductCard({product}){
    return(
        <Link to={"/product/"+"1"}>
            <div className="card .h-100">
                <img src={img1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5>Product name {product.id}</h5>
                    <p className="card-text price">$200</p>
                    <p className="card-text">description bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
                </div>
            </div>
        </Link>
    )
}

export default function ProductList(){
    let page  = parseInt(useParams().page)
    if(!page){
        page = 1
    }
    const navigate = useNavigate()
    const maxItemsPerPage = 12
    const [isLoading, setIsLoading] = useState(false)

    const [productList, setProductList] = useState(loadData())
    const [displayProducts, setDisplayProducts] = useState(paginateArray(productList, page, maxItemsPerPage))
    
    function loadData(){
        let productList = []

        for (let i = 0; i < 90; i++) { 
            productList.push({id: i+1})
        }

        return productList
    }
    function filter(product){
        return productList.slice(0, 20);
    }

    // Bring back to first page if filtered
    // SUGGESTION: Put filtering nad searching options as routing parameters so refreshing wouldn't remove the filter
    function handleFilter(){
        const filteredList = filter()
        setProductList(filteredList)
        setDisplayProducts(paginateArray(productList, 1, maxItemsPerPage))
        navigate(`${1}`)
    }

    return(
        <div className='product-list'>
            <button onClick={() => handleFilter()}>TEST</button>
            <div className='card-holder row justify-content-center'>
                {(isLoading) ? <Loader/> : <></>}
                {displayProducts.map(product => <ProductCard key={product.id} product={product} />)}
            </div>

            <PaginationList item={productList} setItem={setDisplayProducts} maxItemsPerPage={maxItemsPerPage} currentIdx={page} />
        </div>
    )
}