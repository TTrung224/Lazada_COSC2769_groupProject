import React, {useContext, useEffect} from 'react';
import logo from "../../Asset/webLogo.png";
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../Context/loginSessionContext'
import '../componentStyle.css';
import { handleAuth } from '../../Service/commonService';

export default function ProductList(){

    return(
        <div className='product-list'>
            this is product list
        </div>
    )
}