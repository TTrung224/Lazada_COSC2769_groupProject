import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/loginSessionContext';
import '../componentStyle.css';
import Navbar from './navbar';

export default function Logout(){
    const { logoutFunc } = useContext(AuthContext)
    const navigate = useNavigate()

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    useEffect(() => {
        logout();
    }, []);

    async function logout() {
        await logoutFunc();
    }

    return(
        <div>
            <Navbar/>
            <div className='logout message'>
                <h5>Thank you and see your again</h5>
            </div>
        </div>
    )
}