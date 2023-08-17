import { useParams } from 'react-router-dom';
import PaginationList, { paginateArray } from '../Component/Shared/Pagination';

const sellers = [
    { id: 1, name: 'Seller 1', status: 'Pending' },
    { id: 2, name: 'Seller 2', status: 'Pending' },
    { id: 3, name: 'Seller 3', status: 'Pending' },
    { id: 4, name: 'Seller 4', status: 'Accepted' },
    { id: 5, name: 'Seller 5', status: 'Pending' },
    { id: 6, name: 'Seller 6', status: 'Pending' },
    { id: 7, name: 'Seller 7', status: 'Rejected' }
]

export default function AdminSellerRequest( ) {
    let { page } = useParams()
    if(!page){
        page = 1
    }
    else {
        page = parseInt(page)
    }
    const maxItemsPerPage = 3
    return (
        <div className='container'>
            <ul>
                {paginateArray(sellers, page, maxItemsPerPage).map((seller) => {
                    return <li key={seller.id}>{seller.name}</li>
                })}
            </ul>
            <PaginationList itemCount={sellers.length} maxItemsPerPage={maxItemsPerPage} currentIdx={page}></PaginationList>
        </div>
    )
}
