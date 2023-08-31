import { axiosSetting } from "../Context/constants"

export async function getUserProducts(userId) {
    try {
        const products = await axiosSetting.get(`/product/seller/${userId}`)
        return products
    } catch (error) {
        console.log(error.message)
        return null
    }
}

export async function getProduct(productId) {
    try {
        const product = await axiosSetting.get(`/product/${productId}`)
        return product
    } catch (error) {
        console.log(error.message)
        return null
    }
}

export async function createProduct(formData){
    try{
        const res = await axiosSetting.post("/product/add", formData)
        return res.message
    }catch(error){
        console.log(error.message)
        return error.message
    }
}

export async function saveProduct( productId, formData){
    try{
        const res = await axiosSetting.post(`/product/edit/${productId}`, formData)
        return res.message
    }catch(error){
        console.log(error.message)
        return error.message
    }
}
