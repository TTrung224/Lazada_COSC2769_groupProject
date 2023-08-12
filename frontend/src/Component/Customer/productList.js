import React, {useContext, useEffect} from 'react';
import img1 from "../../Asset/test_product_images/1.jpg";
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../Context/loginSessionContext'
import '../componentStyle.css';
import { handleAuth } from '../../Service/commonService';

function ProductCard(){
    return(
        <Link to={"/product/"+"1"}>
            <div class="card .h-100">
                <img src={img1} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5>Product name</h5>
                    <p class="card-text price">$200</p>
                    <p class="card-text">description bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
                </div>
            </div>
        </Link>
    )
}

export default function ProductList(){
    let list = []
    for (let i = 0; i < 20; i++) { 
        list.push(<ProductCard/>)
    }

    return(
        <div className='product-list'>
            <div className='card-holder row justify-content-center align-content-start'>
                {list}
            </div>
        </div>
    )
}