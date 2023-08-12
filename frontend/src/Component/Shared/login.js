import React, {useContext, useEffect} from 'react';
import logo from "../../Asset/webLogo.png";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../Context/loginSessionContext'
import '../componentStyle.css';
import { handleAuth } from '../../Service/commonService';

export default function Login(){
    const { authState: {isAuthenticated, user}} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        const path = handleAuth(isAuthenticated, user?.type);
        if(path!=null) navigate(path)
    });

    return(
        <div className='login-form'>
            login form here
        </div>
    )
}