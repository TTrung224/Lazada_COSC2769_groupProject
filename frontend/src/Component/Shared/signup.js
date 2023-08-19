import React, {useContext, useEffect,useState} from 'react';
import logo from "../../Asset/webLogo.png";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../Context/loginSessionContext'
import '../componentStyle.css';
import { handleAuth } from '../../Service/commonService';

export default function Signup(){
    const { authState: {isAuthenticated, user}} = useContext(AuthContext)
    const navigate = useNavigate()
    // var customerCheck = document.querySelector('#checkbox1')
    // var sellerCheck = document.querySelector('#checkbox2')

    const [type,setType] = useState("customer")

    useEffect(() => {
        const path = handleAuth(isAuthenticated, user?.type);
        if(path!=null) navigate(path)
    });

    function changeTypeCustomer(){
        setType((type) =>type = "customer" )   
    }
    function changeTypeSeller(){
        setType((type) =>type = "seller" )   
    }

    return(
        <div className='signup-form-container'>
            <label for="sign-up" ><h2>Create your Lazada Account</h2></label>
            <br/>
            <div>
                <input type='radio' id='radio1' name='user-type' value="customer" defaultChecked onClick = {()=> changeTypeCustomer()} />
                <label for='radio1'>Customer</label>
                <input type='radio' id='radio2' name='user-type' value="seller" onClick = {()=> changeTypeSeller()}/>
                <label for='radio2'>Seller</label>
            </div>
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
            
                    {type == "customer"?(
                        <div className='signup-right'> 
                        <label for="full-name">Full name</label>
                        <input type='text' id='full-name' placeholder='Enter your full name'/>
                        <label for='phone-number'>Phone number</label>
                        <input type='number' id="phone-number" placeholder='Enter your phone number'/>
                        <label for='address'>Address</label>
                        <input type='text' id='address' placeholder='Enter your address'/>
                        <p>Already have an account? <Link to='/login'>Sign in</Link> here </p>
                        </div>
                        
                    ):(
                        <div className='signup-right'> 
                        <label for="business-name">Business name</label>
                        <input type='text' id='business-name' placeholder='Enter your business name'/>
                        <label for='business-phone-number'>Business phone number</label>
                        <input type='number' id="business-phone-number" placeholder='Enter your business phone number'/>
                        <p>Already have an account? <Link to='/login'>Sign in</Link> here </p>
                        </div>
                    )}
            </div>
        </div>
        
    )
}