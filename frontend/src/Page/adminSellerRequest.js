import AdminSellerTable from '../Component/Admin/AdminSellerTable.js';
import { useEffect, useState } from 'react';
import Navbar from '../Component/Shared/navbar';
import { getSellers, saveSeller } from '../Service/AdminAPI';
import Loader from '../Component/Shared/loader.js';



export default function AdminSellerRequest() {
    const [sellers, setSellers] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getSellers().then(data => {
            setSellers(data) 
        }).finally(() => {setIsLoading(false); console.log(sellers)})
    }, [])

    async function handleChangeStatus(id, status){
        setIsLoading(true)
        const res = await saveSeller(id, status)
        if(!res.success){
            alert("Update status fail, please try again")
        }
        setSellers(await getSellers())
        setIsLoading(false)
    } 

    return (
        <>
            <Navbar />

            <div className='container'>

                <h2 className='mb-4'>List of Sellers</h2>

                {sellers? <AdminSellerTable sellers={sellers} handleChangeStatus={handleChangeStatus}/> : <></>}
            </div>
            {isLoading ? <Loader /> : <></>}
        </>
    )
}
