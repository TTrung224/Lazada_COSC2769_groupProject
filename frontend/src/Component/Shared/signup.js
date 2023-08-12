import React, {useContext, useEffect} from 'react';
import logo from "../../Asset/webLogo.png";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../Context/loginSessionContext'
import '../componentStyle.css';
import { handleAuth } from '../../Service/commonService';

export default function Signup(){
    const { authState: {isAuthenticated}} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        const path = handleAuth(isAuthenticated);
        if(path!=null) navigate(path)
    });

    return(
        <div className='signup-form'>
            signup form here
        </div>
    )
}