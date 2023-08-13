import React, {useContext, useEffect} from 'react';
import img1 from "../../Asset/test_product_images/1.jpg";
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../Context/loginSessionContext'
import '../componentStyle.css';
import { handleAuth } from '../../Service/commonService';

function ProductCard(){
    return(
        <Link to={"/product/"+"1"}>
            <div className="card .h-100">
                <img src={img1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5>Product name</h5>
                    <p className="card-text price">$200</p>
                    <p className="card-text">description bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
                </div>
            </div>
        </Link>
    )
}

export default function ProductList(){
    let list = []
    for (let i = 0; i < 20; i++) { 
        list.push(<ProductCard key={i}/>)
    }

    return(
        <div className='product-list'>
            <div className='card-holder row justify-content-center align-content-start'>
                {list}
            </div>
            <nav className='paginavtion-nav' aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}