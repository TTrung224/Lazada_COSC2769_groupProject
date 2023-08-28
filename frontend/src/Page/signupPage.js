import React from 'react';
import Navbar from '../Component/Shared/navbar';
import Signup from '../Component/Shared/signup';
import { redirect } from "react-router-dom";
import { axiosSetting } from '../Context/constants';

export default function SignupPage(){
    return(
        <>
            <Navbar/>
            <Signup/>
        </>
    )
}
