import { Navigate, useNavigate} from "react-router-dom";


export const handleAuth = (isAuthenticated) => {
    console.log(isAuthenticated)
    console.log(window.location.pathname)
    
    // authenticated -> navigate to user page
    if (isAuthenticated && window.location.pathname === '/login') {
        console.log(1)
        return "/"

    // not authenticated -> navigate to login
    } else if (!isAuthenticated && window.location.pathname !== '/login' && 
            window.location.pathname !== '/' &&
            window.location.pathname !== '/signup') {
        console.log(2)
        return "/login"

    // not navigate
    } else {
        console.log(3)
        return null
    }
}

