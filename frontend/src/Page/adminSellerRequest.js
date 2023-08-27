import AdminSellerTable from '../Component/Admin/AdminSellerTable.js';
import { useEffect, useState } from 'react';
import Navbar from '../Component/Shared/navbar';
import { getSellers, saveSeller } from '../Component/Admin/AdminAPI';
import Loader from '../Component/Shared/loader.js';



export default function AdminSellerRequest() {
    const [sellers, setSellers] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const data = getSellers().then(data => {
            setSellers(data)
        }).finally(() => setIsLoading(false))
    }, [])

    async function handleChangeStatus(id, status){
        setIsLoading(true)
        const newSellers = sellers.map(s => {
            if(s.id === id){
                s.status = status
            } return s
        })
        setSellers(newSellers)
        await saveSeller(newSellers)
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
