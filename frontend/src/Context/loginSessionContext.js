import {createContext, useEffect, useState} from 'react'
import { axiosSetting } from './constants';

export const AuthContext = createContext();


const noAuthenticatedState = {
    isAuthenticated: false,
    user: null,
}

const AuthContextProvider = ({children}) => {

    // auth state
    const [authState, setAuth] = useState(noAuthenticatedState)

    useEffect(() =>  {
        loadUser();
    },[])

    // const checkAuth = () => {
    //     const authObject = JSON.parse(localStorage.getItem(authenticationStorageKey))
    //     if(authObject){
    //         authObject.expired_time = Date.parse(authObject?.expired_time)
    //     }
        
    //     if(authObject && authObject.expired_time > new Date()){
    //         return authObject
    //     } else if(authObject && authObject.expired_time <= new Date()){
    //         console.log("login session expired")
    //         localStorage.removeItem(authenticationStorageKey)
    //         return noAuthenticatedState
    //     }
    //     return noAuthenticatedState
    // }

    const loginFunc = async (userForm) => {
        try {
            const res = await axiosSetting.post("account/login", userForm)
            if(res.status == 200){
                const authObject = {
                    isAuthenticated: true, 
                    user: res.data
                }
                setAuth(authObject)
                return {success: true, data: res.data}
            }
            return {success: false, data: res.data}
        } catch (error) {
            console.log(error)
            if (error.response.data) return {success: false, data: error.response.data}
            else return {status: false, data: error.message}
        }
    }

    const logoutFunc = async () => {
        try {
            const res = await axiosSetting.post(`account/logout`)
            if (res.status === 200) {
                setAuth(noAuthenticatedState)
            }
            return {success: true, message: "you are logged out"}
        } catch (error) {
            if (error.response.data) return error.response.data
            else return {status: false, message: error.message}
        }
    }

    const loadUser = async () => {
        try {
            const res = await axiosSetting.get(`account`)
            if (res.status === 200) {
                setAuth({
                    isAuthenticated: true,
                    user: res.data
                })
            }
        } catch (error) {
            setAuth({
                isAuthenticated: false,
                user: null
            })
        }
    }

    const authContextData = { 
        authState, loginFunc, logoutFunc, loadUser
    };
    
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>    
    )
}

export default AuthContextProvider



