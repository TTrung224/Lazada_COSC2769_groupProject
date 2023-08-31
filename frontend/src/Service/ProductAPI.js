import { axiosSetting } from "../Context/constants"

export async function getUserProducts(userId) {
    try {
        const products = await axiosSetting.get(`/product/${userId}`)
        return products
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