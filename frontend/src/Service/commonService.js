import { ADMIN, CUSTOMER, SELLER } from "../constants"


export const handleAuth = (userTypeUpper) => {
    const allPath = ["/login", "signup", "/logout"]
    const guestPath = ["/cart", "/product"]
    const userPath = ["/order"]
    const sellerPath = ["/seller"]
    const adminPath = ["/admin"]
    const path = window.location.pathname

    if (allPath.some(p => path.includes(p))) {
        return true
    }

    if (guestPath.some(p => path.includes(p)) || path === "/") {
        if (userTypeUpper === ADMIN || userTypeUpper === SELLER) {
            return false
        }return true
    }

    if (userPath.some(p => path.includes(p))) {
        if (userTypeUpper === CUSTOMER) {
            return true
        } return false
    }

    if (sellerPath.some(p => path.includes(p))) {
        if (userTypeUpper === SELLER) {
            return true
        } return false
    }

    if (adminPath.some(p => path.includes(p))) {
        
        if (userTypeUpper === ADMIN) {
            return true
        } return false
    }
    // authenticated -> navigate to that user type's page
    // if (isAuthenticated && window.location.pathname !== "/logout" && (
    //     noAuth.includes(window.location.pathname) ||
    //     !window.location.pathname.includes("/"+userType.toLowerCase()+"/")
    //     )) {
    //     if(userTypeUpper === CUSTOMER) return "/"
    //     else if(userTypeUpper === SELLER) return "/seller"
    //     else if(userTypeUpper === ADMIN) return "/admin"
    //     else return null

    // not authenticated -> navigate to login
    // } else if (!isAuthenticated && !noAuth.includes(window.location.pathname)) {
    //     return "/login"

    // // not navigate
    // } else {
    //     return null
    // }
}

