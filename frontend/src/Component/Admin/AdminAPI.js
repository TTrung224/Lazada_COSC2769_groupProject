import { axiosSetting } from "../../Context/constants"

const test = [
    { id: 0, name: 'Electronic Devices', attributes: [], parent: -1 },
    { id: 1, name: 'Home Appliances', attributes: [], parent: -1 },
    { id: 2, name: 'Groceries and Snack', attributes: [], parent: -1 },
    { id: 3, name: 'Computer', attributes: [{ name: 'Model', type: 'text', required: true }], parent: 0 },
    { id: 4, name: 'Laptop', attributes: [], parent: 0 },
    { id: 5, name: 'Kitchen', attributes: [], parent: 1 },
    { id: 6, name: 'Living Room', attributes: [], parent: 1 },
    { id: 7, name: 'Sweet', attributes: [], parent: 2 },
    { id: 8, name: 'Gaming', attributes: [], parent: 3 },
    { id: 9, name: '3D Modelling', attributes: [], parent: 3 }
]

const sellersTest = [
    { id: 1, name: 'Seller 1', email: 'test123@mail.com', status: 'Pending' },
    { id: 2, name: 'Seller 2', email: 'test123@mail.com', status: 'Pending' },
    { id: 3, name: 'Seller 3', email: 'test123@mail.com', status: 'Pending' },
    { id: 4, name: 'Seller 4', email: 'test123@mail.com', status: 'Accepted' },
    { id: 5, name: 'Seller 5', email: 'test123@mail.com', status: 'Pending' },
    { id: 6, name: 'Seller 6', email: 'test123@mail.com', status: 'Pending' },
    { id: 7, name: 'Seller 7', email: 'test123@mail.com', status: 'Rejected' },
    { id: 8, name: 'Seller 7', email: 'test123@mail.com', status: 'Accepted' },
    { id: 9, name: 'Seller 7', email: 'test123@mail.com', status: 'Accepted' },
    { id: 10, name: 'Seller 7', email: 'test123@mail.com', status: 'Rejected' }
]

export async function getSellers() {
    try{
        const res = await axiosSetting.get("account/seller-request")
        if(res.status == 200){
            console.log(res)
            return res.data
        }else{
            return[]
        }
    } catch(error){
        return[]
    }
}

export async function getSeller(id) {
    const seller = sellersTest.find(s => s.id === id)
    return new Promise(resolve => {
        setTimeout(() => resolve(seller), 500)
    })
}

export async function saveSeller(id, status) {
    try{
        const res = await axiosSetting.put(`account/seller-request/${id}`, {sellerStatus: status})
        if(res.status != 200){
            return {success: false}
        }
    } catch(error){
        return {success: false}
    }
    return {success: true}
}

export async function getCategories() {
    const res = axiosSetting.get("/category")
    return res
}

export async function getCategoryWithParents(id) {
    const res = axiosSetting.get(`/category/${id}`)
    return res
}

export async function addCategory(category) {
    const res = await axiosSetting.post("/category/add", category)
    return res
}

export async function updateCategory(id, category) {
    console.log(category)
    const res = await axiosSetting.put(`/category/edit/${id}`, category)
    return res
}

export async function deleteCategory(id) {
    const res = await axiosSetting.delete(`/category/delete/${id}`)
    return res
}