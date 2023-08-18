import { useLoaderData, useSearchParams } from 'react-router-dom';
import PaginationList, { paginateArray } from '../Component/Shared/Pagination';
import AdminSellerTable from '../Component/Admin/AdminSellerTable.js';
import { useState } from 'react';
import Navbar from '../Component/Shared/navbar';
import { getSellers } from '../Component/Admin/AdminAPI';


export async function loadSellers(){
    const data = await getSellers()
    return data
}

export default function AdminSellerRequest() {
    const [searchParams] = useSearchParams()
    let page = parseInt(searchParams.get("page"))
    if (!page) {
        page = 1
    }
    const maxItemsPerPage = 5
    const sellers = useLoaderData()
    
    const [displaySellers, setDisplaySellers] = useState(paginateArray(sellers, page, maxItemsPerPage))

    // function handleChangeStatus(seller, status){
    //     seller.status = status
    //     const newSellers = sellers.map(s => {
    //         if(s.id === seller.id){
    //             return seller
    //         } return s
    //     })
    //     setSellers(newSellers)
    // } 


    return (
        <>
            <Navbar />
            <div className='container'>

                <h2 className='mb-4'>List of Sellers</h2>

                <AdminSellerTable sellers={displaySellers} />
                <PaginationList totalItems={sellers} setDisplayItems={setDisplaySellers} maxItemsPerPage={maxItemsPerPage} currentIdx={page}></PaginationList>
            </div>
        </>
    )
}
