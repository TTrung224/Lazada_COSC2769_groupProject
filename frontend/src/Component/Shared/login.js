import React, { useContext } from 'react';
import { AuthContext } from '../../Context/loginSessionContext';
import '../componentStyle.css';
import { Link } from 'react-router-dom';

export default function Login(){
    const { authState: {isAuthenticated, user}} = useContext(AuthContext)
    const { loginFunc } = useContext(AuthContext)

    //  place this function in login button to login  =>>>>>>> onClick={()=>loginFunc()}
    return(
        <div className='login-form'>           
            <label for="login" ><h2>Login</h2></label>
            <br/>
            <form className='login-form' id="login">
                <div className='signup-left'>
                    <label for="email">Email or Phone</label>
                    <input type='text' id="email" placeholder='Enter email/phone number' required/>
                    <label for="password">Password</label>
                    <input type='password' id='password' placeholder='Enter password' required/>
                    <button type='submit'>Login</button>
                    <p>Dont have an account? <Link to='/signup'>Sign up</Link> here  </p>
                </div>           
            </form>
        </div>
    )
}