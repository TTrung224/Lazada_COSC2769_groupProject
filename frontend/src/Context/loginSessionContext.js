import {createContext, useState} from 'react'

export const AuthContext = createContext();


const noAuthenticatedState = {
    isAuthenticated: false,
    user: null,
    expired_time: null,
}

const authenticationStorageKey = "authentication"

Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
}

const AuthContextProvider = ({children}) => {

    const checkAuth = () => {
        const authObject = JSON.parse(localStorage.getItem(authenticationStorageKey))
        if(authObject){
            authObject.expired_time = Date.parse(authObject?.expired_time)
        }
        
        if(authObject && authObject.expired_time > new Date()){
            return authObject
        } else if(authObject && authObject.expired_time <= new Date()){
            console.log("login session expired")
            localStorage.removeItem(authenticationStorageKey)
            return noAuthenticatedState
        }
        return noAuthenticatedState
    }

    // auth state
    const [authState, setAuth] = useState(checkAuth())

    const loginFunc = async (userForm) => {
        try {
            let now = new Date()
            now.addHours(1)
            const authObject = {isAuthenticated: true, user: {name: "test", type: "seller"}, expired_time: now}
            setAuth(authObject)
            localStorage.setItem(authenticationStorageKey, JSON.stringify(authObject));
        } catch (error) {
            console.log(error)
            if (error.response.data) return error.response.data
            else return {status: false, message: error.message}
        }
    }

    const logoutFunc = async () => {
        try{
            setAuth(noAuthenticatedState)
            localStorage.removeItem(authenticationStorageKey)
        } catch (error) {
            console.log(error)
            if (error.response.data) return error.response.data
            else return {status: false, message: error.message}
        }
    }

    const loadUser = async () => {
        try {
            
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



