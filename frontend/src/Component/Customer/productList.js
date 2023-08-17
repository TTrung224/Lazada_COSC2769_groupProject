import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
    
    const maxItemsPerPage = 12
    const [isLoading, setIsLoading] = useState(false)

    const productList = loadData()
    const filteredList = filter()
    const [displayProducts, setDisplayProducts] = useState(paginateArray(filteredList, page, maxItemsPerPage))
    console.log(filteredList.length)
    function loadData(){
        let productList = []

        for (let i = 0; i < 90; i++) { 
            productList.push({id: i+1})
        }

        return productList
    }
    function filter(product){
        // Search and filter logic go here
        return productList;
    }


    return(
        <div className='product-list'>
            <div className='card-holder row justify-content-center'>
                {(isLoading) ? <Loader/> : <></>}
                {displayProducts.map(product => <ProductCard key={product.id} product={product} />)}
            </div>

            <PaginationList item={filteredList} setItem={setDisplayProducts} maxItemsPerPage={maxItemsPerPage} currentIdx={page} />
        </div>
    )
}