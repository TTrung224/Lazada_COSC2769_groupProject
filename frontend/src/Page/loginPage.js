import React, {useContext, useEffect} from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {AuthContext} from '../Context/loginSessionContext'
import { handleAuth } from '../Service/commonService';
import Navbar from '../Component/Shared/navbar';
import Login from '../Component/Shared/login';

export default function LoginPage(){
    return(
        <>
            <Navbar/>
            <Login />
        </>
    )
}