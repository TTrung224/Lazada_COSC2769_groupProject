import { useParams } from 'react-router-dom';
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

export default function AdminSellerRequest() {
    let page = parseInt(useParams().page)
    if (!page) {
        page = 1
    }
    const maxItemsPerPage = 5
    const [sellers, setSellers] = useState(paginateArray(test, page, maxItemsPerPage))

    return (
        <>
            <Navbar />
            <div className='container'>

                <h2>List of Sellers</h2>
                <AdminSellerTable sellers={sellers} setSellers={setSellers} />
                <PaginationList item={test} setItem={setSellers} maxItemsPerPage={maxItemsPerPage} currentIdx={page}></PaginationList>
            </div>
        </>
    )
}
