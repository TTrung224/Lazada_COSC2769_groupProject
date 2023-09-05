import { axiosSetting } from "../Context/constants";

export async function loadCartItems(isAuthenticated) {
    if (isAuthenticated) {
        const res = await getCartItems()
        if(res && res.status === 200){
            return res.data
        } else {
            alert("Error loading cart from database")
        }
    }
    const ls = localStorage.cart
    if (ls) {
        const cartList = JSON.parse(localStorage.cart)
        return cartList
    }
    return []
}


export async function getCartItems() {
    try {
        const res = await axiosSetting.get("/account/cart")
        return res
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function updateCart(cart) {
    try {
        const res = await axiosSetting.post("account/cart/update", cart)
        return res
    } catch (error) {
        console.log(error)
        return null
    }
}




