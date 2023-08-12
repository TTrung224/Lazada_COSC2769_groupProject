import { CUSTOMER, SELLER, ADMIN } from "../constants"


export const handleAuth = (isAuthenticated, userType) => {
    const userTypeUpper = userType.toUpperCase()
    const notRequiredAuthenticatedPath = ["/", "/login", "/signup"]
    console.log(userTypeUpper)
    // authenticated -> navigate to user page
    if (isAuthenticated && notRequiredAuthenticatedPath.includes(window.location.pathname)) {
        if(userTypeUpper === CUSTOMER) return "/customer"
        else if(userTypeUpper === SELLER) return "/seller"
        else if(userTypeUpper === ADMIN) return "/admin"
        else return "/"

    // not authenticated -> navigate to login
    } else if (!isAuthenticated && !notRequiredAuthenticatedPath.includes(window.location.pathname)) {
        return "/login"

    // not navigate
    } else {
        return null
    }
}

