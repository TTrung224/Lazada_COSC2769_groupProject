import {createContext, useState} from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    // auth state
    const [authState, setAuth] = useState({
        isAuthenticated: false,
        user: null
    })
    
    const loginFunc = async (userForm) => {
        try {
            setAuth({isAuthenticated: true, user: {name: "test", type: "customer"}})
        } catch (error) {
            console.log(error)
            if (error.response.data) return error.response.data
            else return {status: false, message: error.message}
        }
    }

    const logoutFunc = async () => {
        try{
            setAuth({isAuthenticated: false, user: null})
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



