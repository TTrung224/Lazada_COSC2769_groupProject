import React from 'react';
import Navbar from '../Component/Shared/navbar';
import Signup from '../Component/Shared/signup';
import { redirect } from "react-router-dom";

export async function handleSignUp({ request }) {
    const formData = await request.formData()
    const newData = Object.fromEntries(formData);
    console.log(newData)
    alert("sign up")
    // redirect("/login")
    return null
}

export default function SignupPage(){
    return(
        <>
            <Navbar/>
            <Signup/>
        </>
    )
}
