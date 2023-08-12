import React, {useContext, useEffect} from 'react';
import logo from "../../Asset/webLogo.png";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../Context/loginSessionContext'
import '../componentStyle.css';
import { handleAuth } from '../../Service/commonService';

export default function Navbar(){
    const { authState: {isAuthenticated}} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        const path = handleAuth(isAuthenticated);
        if(path!=null) navigate(path)
    });

    return(
        <div className='header-div'>
            <nav className="navbar header navbar-expand-lg navbar-light bg-light">
                <div className="navbar-nav ms-auto me-3">
                    <NavLink className="nav-item" to="/login">Login</NavLink>
                    <a className="nav-item" href="#">Signup</a>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className='logo px-2'>
                    <img src={logo} height="30" className="d-inline-block align-top" alt="logo"></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link text-xl" href="#">Orders</a>
                        <a className="nav-item nav-link text-xl" href="#">Pricing</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}