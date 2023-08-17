import { useNavigate } from "react-router-dom"

export function paginateArray(array, currentIdx, maxItemsPerPage) {
    return array.filter((element, index) => index >= (currentIdx - 1) * maxItemsPerPage && index < currentIdx * maxItemsPerPage)
}


const PaginationList = ({ item, setItem, maxItemsPerPage, currentIdx }) => {

    const navigate = useNavigate()
    const totalPage = Math.ceil(item.length / maxItemsPerPage)
    const pagingList = generatePagination(totalPage)

    const onChangePage = (newPage) => {
        const newItems = paginateArray(item, newPage, maxItemsPerPage)
        setItem(newItems)
        navigate(`${newPage}`)
    }

    function generatePagination(totalPage) {
        let pagingList = []
        if (totalPage < 7) {
            for (let i = 0; i < totalPage; i++) {
                if ((i + 1) === currentIdx) {
                    pagingList.push(<li className="page-item active"><button className="page-link" onClick={() => onChangePage(i + 1)}>{i + 1}</button></li>)
                } else {
                    pagingList.push(<li className="page-item"><button className="page-link" onClick={() => onChangePage(i + 1)}>{i + 1}</button></li>)
                }
            }
        } else {
            if (currentIdx > 1) {
                pagingList.push(<li className="page-item"><button className="page-link" onClick={() => onChangePage(1)}>1</button></li>)
            }
            if (currentIdx >= 4) {
                pagingList.push(<li className="page-item"><button className="page-link" disabled>...</button></li>)
            }
            if (currentIdx > 2) {
                pagingList.push(<li className="page-item"><button className="page-link" onClick={() => onChangePage(currentIdx - 1)}>{currentIdx - 1}</button></li>)
            }

            pagingList.push(<li className="page-item active"><button className="page-link" onClick={() => onChangePage(currentIdx)}>{currentIdx}</button></li>)

            if (currentIdx <= totalPage - 2) {
                pagingList.push(<li className="page-item"><button className="page-link" onClick={() => onChangePage(currentIdx + 1)}>{currentIdx + 1}</button></li>)
            }
            if (currentIdx <= totalPage - 3) {
                pagingList.push(<li className="page-item"><button className="page-link" disabled>...</button></li>)
            }
            if (currentIdx < totalPage) {
                pagingList.push(<li className="page-item"><button className="page-link" onClick={() => onChangePage(totalPage)}>{totalPage}</button></li>)
            }
        }
        return pagingList
    }

    return (
        <nav className='paginavtion-nav' aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={(currentIdx === 1) ? "page-item disabled" : "page-item"}>
                    <button className="page-link" disabled={currentIdx === 1} onClick={() => onChangePage(currentIdx - 1)}>Prev</button>
                </li>
                {pagingList}
                <li className={(currentIdx === totalPage) ? "page-item disabled" : "page-item"}>
                    <button className="page-link" disabled={currentIdx === totalPage} onClick={() => onChangePage(currentIdx + 1)}>Next</button>
                </li>
            </ul>
        </nav>
    );
}

export default PaginationList;