import React, {useContext, useEffect} from 'react';
import logo from "../../Asset/webLogo.png";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../Context/loginSessionContext'
import '../componentStyle.css';
import { handleAuth } from '../../Service/commonService';
import {CUSTOMER, ADMIN, SELLER} from '../../constants';

function NavItem({nav}){
    console.log(nav)
    return(
        <NavLink className="nav-item nav-link text-xl nav-custom-item" to={nav.link}>
            {nav.name}
            <i className={nav.icon}></i>
        </NavLink>
    )
} 

function HeaderItem({nav}){
    console.log(nav)
    return(
        <NavLink className="nav-item header-item" to={nav.link}>
            {nav.name}
        </NavLink>
    )
} 

export default function Navbar(){
    const listNav = {
        guest: [
            {name: "Cart", icon: "bi bi-cart-fill", link: "/cart"},
        ],
        customer: [
            {name: "Orders", icon: "bi bi-clipboard2-check-fill", link: "/customer/order"},
            {name: "Cart", icon: "bi bi-cart-fill", link: "/customer/cart"},
        ],
        seller: [
            {name: "Orders", icon: "bi bi-clipboard2-check-fill", link: "/seller/order"},
            {name: "Products", icon: "bi bi-archive-fill", link: "/customer/product"},
        ],
        admin: [
            {name: "Seller Request", icon: "bi bi-clipboard2-check-fill", link: "/admin/seller-request"},
            {name: "Product Categories", icon: "bi bi-tags-fill", link: "/admin/product-category"},
        ],
    }

    const listHeader = {
        guest: [
            {name: "Login", link:"/login"},
            {name: "Signup", link:"/signup"},
        ],
        account: [
            {name: "Account", icon: "bi bi-person-circle", link:"#"},
            {name: "Logout", icon: "bi bi-person-circle", link:"#"},
        ]
    }

    const { authState: {isAuthenticated, user}} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        const path = handleAuth(isAuthenticated);
        if(path!=null) navigate(path)
    });

    let navList = [];
    let headList = [];
    if(user?.type === CUSTOMER){
        navList = listNav.customer.map((item => <NavItem nav={item}/>))
        headList = listHeader.account.map((item => <HeaderItem nav={item}/>))
    } else if(user?.type === ADMIN){
        navList = listNav.admin.map((item => <NavItem nav={item}/>))
        headList = listHeader.account.map((item => <HeaderItem nav={item}/>))
    } else if(user?.type === SELLER){
        navList = listNav.seller.map((item => <NavItem nav={item}/>))
        headList = listHeader.account.map((item => <HeaderItem nav={item}/>))
    } else{
        navList = listNav.guest.map((item => <NavItem nav={item}/>))
        headList = listHeader.guest.map((item => <HeaderItem nav={item}/>))
    }

    return(
        <div className='header-div'>
            <nav className="navbar header navbar-expand-lg navbar-light bg-light">
                <div className="navbar-nav ms-auto me-3">
                    {headList}
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
                    <div className="navbar-nav navbar-div">
                        {navList}
                    </div>
                </div>
            </nav>
        </div>
    )
}