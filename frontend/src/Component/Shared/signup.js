import React, {useContext, useEffect,useState} from 'react';
import { Link, useNavigate, Form } from 'react-router-dom';
import {AuthContext} from '../../Context/loginSessionContext'
import '../componentStyle.css';
import { handleAuth } from '../../Service/commonService';

export default function Signup(){
    const { authState: {isAuthenticated, user}} = useContext(AuthContext)
    const navigate = useNavigate()

    const [type,setType] = useState("customer")
    const [pwd,setPwd] = useState("")
    const [rePwd,setRePwd] = useState("")
    const [error,setError] = useState("")

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

    function handlerSubmit(e){
        let message = []
        if(pwd !== rePwd){
            message.push("Confirm password must be the same as password")
        }

        if(message.length > 0){
            e.preventDefault()
            setError(message.join(", "))
        }else {
            setError("")
        }
    }

    return(
        <div className='signup-form-container'>
            <label htmlFor="sign-up" ><h2>Create your Lazada Account</h2></label>
            <br/>
            <Form className='signup-form' id="sign-up" method='POST'>
                <div className='account-type-input'>
                    <input type='radio' id='radio1' name='user-type' value="customer" defaultChecked onClick = {()=> changeTypeCustomer()} />
                    <label htmlFor='radio1'>Customer</label>
                    <input type='radio' id='radio2' name='user-type' value="seller" onClick = {()=> changeTypeSeller()}/>
                    <label htmlFor='radio2'>Seller</label>
                </div>
                <div className='signup-inputs'>
                    <div className='signup-left'>
                        <label htmlFor="email">Email</label>
                        <input type='email' id="email" placeholder='Enter yopur email' name='email' required/>
                        <label htmlFor="password">Password</label>
                        <input type='password' id='password' placeholder='Enter password' name='pwd' defaultValue={pwd} required onChange={(e) => setPwd(e.target.value)}/>
                        <label htmlFor="re-pwd">Confirm password</label>
                        <input type='password' id='re-pwd' placeholder='ReEnter your password' name='re_pwd' defaultValue={rePwd} required onChange={(e) => setRePwd(e.target.value)}/>
                        {error!="" ? <p className='error-message'>{error}</p> : ""}
                        <button type='submit' onClick={(e)=>handlerSubmit(e)}>Create account</button>
                    </div>
                
                    {type === "customer"?(
                        <div className='signup-right'> 
                            <label htmlFor="full-name">Full name</label>
                            <input type='text' id='full-name' placeholder='Enter your full name' name='full_name' required/>
                            <label htmlFor='phone-number'>Phone number</label>
                            <input type='number' id="phone-number" placeholder='Enter your phone number' name='phone' required/>
                            <label htmlFor='address'>Address</label>
                            <input type='text' id='address' placeholder='Enter your address' name='address' required/>
                            <p>Already have an account? <Link to='/login'>Sign in</Link> here </p>
                        </div>
                        
                    ):(
                        <div className='signup-right'> 
                            <label htmlFor="business-name" >Business name</label>
                            <input type='text' id='business-name' placeholder='Enter your business name' name='full_name' required/>
                            <label htmlFor='business-phone-number'>Business phone number</label>
                            <input type='number' id="business-phone-number" placeholder='Enter your business phone number' name='phone' required/>
                            <p>Already have an account? <Link to='/login'>Sign in</Link> here </p>
                        </div>
                    )}
                </div>
                <div className='form-submit'></div>
            </Form>
        </div>
        
    )
}