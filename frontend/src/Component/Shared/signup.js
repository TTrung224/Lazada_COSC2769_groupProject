import React, {useContext, useEffect} from 'react';
import logo from "../../Asset/webLogo.png";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../Context/loginSessionContext'
import '../componentStyle.css';
import { handleAuth } from '../../Service/commonService';

export default function Signup(){
    const { authState: {isAuthenticated, user}} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        const path = handleAuth(isAuthenticated, user?.type);
        if(path!=null) navigate(path)
    });

    return(
        <>
        <label for="sign-up" >Create your Lazada Account</label>
        <br/>
        <input type='checkbox' id='checkbox1' value="customer"/>
        <label for='checkbox1'>Customer</label>
        <input type='checkbox' id='checkbox2' value="seller"/>
        <label for='checkbox2'>Seller</label>
        <div className='signup-form' id="sign-up">
            <div className='signup-left'>
                <label for="email">Email</label>
                <input type='text' id="email" placeholder='Enter yopur email'/>
                <label for="password">Password</label>
                <input type='password' id='password' placeholder='Enter password' />
                <label for="re-pwd">Confirm password</label>
                <input type='password' id='re-pwd' placeholder='ReEnter your password' />
                <button type='button'>Create account</button>
            </div>
            <div className='signup-right'> 
                <label for="full-name">Full name</label>
                <input type='text' id='full-name' placeholder='Enter your full name'/>
                <label for='phone-number'>Phone number</label>
                <input type='number' id="phone-number" placeholder='Enter your phone number'/>
                <label for='address'>Address</label>
                <input type='text' id='address' placeholder='Enter your address'/>
                <p>Already have an account? <Link to='/login'>Sign in</Link> here </p>
            </div>
            
            
            

           
        </div>
        </>
        
    )
}