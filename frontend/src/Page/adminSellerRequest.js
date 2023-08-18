import { useSearchParams } from 'react-router-dom';
import PaginationList, { paginateArray } from '../Component/Shared/Pagination';
import AdminSellerTable from '../Component/Admin/AdminSellerTable.js';
import { useState } from 'react';
import Navbar from '../Component/Shared/navbar';

const test = [
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

function loadSellers(){
    return test
}

export default function AdminSellerRequest() {
    const [searchParams] = useSearchParams()
    let page = parseInt(searchParams.get("page"))
    if (!page) {
        page = 1
    }
    const maxItemsPerPage = 5
    const [sellers, setSellers] = useState(loadSellers())
    const [displaySellers, setDisplaySellers] = useState(paginateArray(sellers, page, maxItemsPerPage))
    const [hasEdit, setHasEdit] = useState(false)
    console.log(sellers[0].status)

    function handleChangeStatus(seller, status){
        seller.status = status
        const newSellers = sellers.map(s => {
            if(s.id === seller.id){
                return seller
            } return s
        })
        setHasEdit(true)
        setSellers(newSellers)
    } 


    return (
        <>
            <Navbar />
            <div className='container'>

                <h2 className='mb-4'>List of Sellers</h2>

                {/* ADD Save Seller API here when available */}
                <button className="btn btn-primary" disabled={!hasEdit}>Save Edit</button>


                <AdminSellerTable sellers={displaySellers} handleChangeStatus={handleChangeStatus} />
                <PaginationList totalItems={sellers} setDisplayItems={setDisplaySellers} maxItemsPerPage={maxItemsPerPage} currentIdx={page}></PaginationList>
            </div>
        </>
    )
}
