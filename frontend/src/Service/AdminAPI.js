import { axiosSetting } from "../Context/constants"


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
        if(res.status === 200){
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
        if(res.status !== 200){
            return {success: false}
        }
    } catch(error){
        return {success: false}
    }
    return {success: true}
}

