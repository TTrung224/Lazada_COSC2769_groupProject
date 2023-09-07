import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../../Context/LoginSessionContext';
import '../componentStyle.css';
import Navbar from './Navbar';

export default function Logout(){
    const { logoutFunc } = useContext(AuthContext)

    useEffect(() => {
        logout();
        // eslint-disable-next-line
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