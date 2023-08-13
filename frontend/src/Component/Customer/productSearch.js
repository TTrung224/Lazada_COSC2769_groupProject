import React, {useContext, useEffect} from 'react';
import img1 from "../../Asset/test_product_images/1.jpg";
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../Context/loginSessionContext'
import '../componentStyle.css';
import { handleAuth } from '../../Service/commonService';

export default function ProductSearchBar(){
    return(
        <div className="search-div">
            <input class="product-search form-control" type="text" placeholder="Search" aria-label="default input example"></input>
            <div class="search-icon-div">
                <i className="bi bi-search seach-icon"></i>
            </div>
        </div>
    )
}