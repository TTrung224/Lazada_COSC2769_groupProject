import {createContext, useState} from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    // auth state
    const [authState, setAuth] = useState({
        isAuthenticated: false,
        user: {type: "SELLER"}
    })
    
    const Login = async userForm => {
        try {
            
        } catch (error) {
            console.log(error)
            if (error.response.data) return error.response.data
            else return {status: false, message: error.message}
        }
    }

    const Logout = async () => {
        try{

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
        authState, Login, Logout, loadUser
    };
    
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>    
    )
}

export default AuthContextProvider



