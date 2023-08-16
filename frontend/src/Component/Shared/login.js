import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/loginSessionContext';
import '../componentStyle.css';

export default function Login(){
    const { authState: {isAuthenticated, user}} = useContext(AuthContext)
    const { loginFunc } = useContext(AuthContext)

    const navigate = useNavigate()

    return(
        <div className='login-form'>
            <button onClick={()=>loginFunc()}>login</button>
            login form here
        </div>
    )
}