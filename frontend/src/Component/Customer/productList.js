import React, {useEffect, useState} from 'react';
import img1 from "../../Asset/test_product_images/1.jpg";
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../Context/loginSessionContext'
import '../componentStyle.css';
import { handleAuth } from '../../Service/commonService';

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
    let productList = []
    let pagingList = []

    for (let i = 0; i < 13; i++) { 
        productList.push({id: i+1})
    }


    function filter(){
        // Search and filter logic go here
        return productList;
    }

    const filteredList = filter()
    const totalPage = Math.ceil(filteredList.length/12)

    const [pagination, setPagination] = useState({current: 1, productList: filteredList.slice(0, 12)})

    if(totalPage < 7){
        for(let i = 0; i < totalPage; i++){
            if((i+1) === pagination.current){
                pagingList.push(<li className="page-item active"><button className="page-link" onClick={()=>onChangePage(i+1)}>{i+1}</button></li>)
            }else{
                pagingList.push(<li className="page-item"><button className="page-link" onClick={()=>onChangePage(i+1)}>{i+1}</button></li>)
            }
        }
    } else {
        if(pagination.current > 1){
            pagingList.push(<li className="page-item"><button className="page-link" onClick={()=>onChangePage(1)}>1</button></li>)
        }
        if(pagination.current >= 4){
            pagingList.push(<li className="page-item"><button className="page-link" disabled>...</button></li>)
        }
        if(pagination.current > 2){
            pagingList.push(<li className="page-item"><button className="page-link" onClick={()=>onChangePage(pagination.current-1)}>{pagination.current-1}</button></li>)
        }

        pagingList.push(<li className="page-item active"><button className="page-link" onClick={()=>onChangePage(pagination.current)}>{pagination.current}</button></li>)
        
        if(pagination.current <= totalPage-2){
            pagingList.push(<li className="page-item"><button className="page-link" onClick={()=>onChangePage(pagination.current+1)}>{pagination.current+1}</button></li>)
        }
        if(pagination.current <= totalPage-3){
            pagingList.push(<li className="page-item"><button className="page-link" disabled>...</button></li>)
        }
        if(pagination.current < totalPage){
            pagingList.push(<li className="page-item"><button className="page-link" onClick={()=>onChangePage(totalPage)}>{totalPage}</button></li>)
        }
    }

    const onChangePage = (newPage)=>{
        if(newPage >= 1 || newPage <= totalPage){
            setPagination({current: newPage, productList: filteredList.slice((12*(newPage-1)), 12*newPage)})
        }
    }

    return(
        <div className='product-list'>
            <div className='card-holder row justify-content-center'>
                {pagination.productList.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
            <nav className='paginavtion-nav' aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={(pagination.current===1) ? "page-item disabled":"page-item"}>
                        <button className="page-link" disabled={pagination.current===1} onClick={()=>onChangePage(pagination.current-1)}>Prev</button>
                    </li>
                        {pagingList}
                    <li className={(pagination.current===totalPage) ? "page-item disabled":"page-item"}>
                        <button className="page-link" disabled={pagination.current===totalPage} onClick={()=>onChangePage(pagination.current+1)}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}