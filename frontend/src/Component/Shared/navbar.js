import React, { useContext, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "../../Asset/webLogo.png";
import { AuthContext } from '../../Context/loginSessionContext';
import { handleAuth } from '../../Service/commonService';
import { ADMIN, CUSTOMER, SELLER } from '../../constants';
import '../componentStyle.css';

function NavItem({nav}){
    return(
        <NavLink className="nav-item nav-link text-xl nav-custom-item" to={nav.link}>
            {nav.name}
            <i className={nav.icon}></i>
        </NavLink>
    )
} 

function HeaderItem({nav}){
    return(
        <Link className="nav-item header-item" to={nav.link}>
            {nav.name}
        </Link>
    )
} 

export default function Navbar(){
    const listNav = {
        guest: [
            {name: "Cart", icon: "bi bi-cart-fill", link: "/guest/cart"},
        ],
        customer: [
            {name: "Products", icon: "bi bi-archive-fill", link: "/customer/product"},
            {name: "Orders", icon: "bi bi-clipboard2-check-fill", link: "/customer/order"},
            {name: "Cart", icon: "bi bi-cart-fill", link: "/customer/cart"},
        ],
        seller: [
            {name: "Orders", icon: "bi bi-clipboard2-check-fill", link: "/seller/order"},
            {name: "Products", icon: "bi bi-archive-fill", link: "/seller/product"},
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
            {name: "Account", link:"#"},
            {name: "Logout", link:"/logout"},
        ]
    }

    //const { authState: {isAuthenticated, user}} = useContext(AuthContext)
    const navigate = useNavigate()

    const isAuthenticated = true
    const user = {type: "admin"}
    useEffect(() => {
        const path = handleAuth(isAuthenticated, user?.type);
        if(path!=null) navigate(path)
    });

    let navList = [];
    let headList = [];
    const userTypeUpper = (user?.type)? user.type.toUpperCase() : null;
    if(isAuthenticated && userTypeUpper === CUSTOMER){
        navList = listNav.customer.map((item => <NavItem nav={item} key={item.name}/>))
        headList = listHeader.account.map((item => <HeaderItem nav={item} key={item.name}/>))
    } else if(isAuthenticated && userTypeUpper === ADMIN){
        navList = listNav.admin.map((item => <NavItem nav={item} key={item.name}/>))
        headList = listHeader.account.map((item => <HeaderItem nav={item} key={item.name}/>))
    } else if(isAuthenticated && userTypeUpper === SELLER){
        navList = listNav.seller.map((item => <NavItem nav={item} key={item.name}/>))
        headList = listHeader.account.map((item => <HeaderItem nav={item} key={item.name}/>))
    } else{
        navList = listNav.guest.map((item => <NavItem nav={item} key={item.name}/>))
        headList = listHeader.guest.map((item => <HeaderItem nav={item} key={item.name}/>))
    }

    return(
        <div className='header-div mb-2'>
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