import { useState } from 'react'
import { ChevronCompactDown, ChevronCompactRight, PencilSquare, Trash } from 'react-bootstrap-icons'
import AdminCategoryList from "./AdminCategoryList";
import { Link } from 'react-router-dom';

const AdminCategoryItem = ({ categories, item, handleDeleteCategory }) => {
    const [collapsed, setCollapsed] = useState(true)
    let collapseElement = <></>
    let collapseIndicator = <ChevronCompactRight />
    if (!collapsed) {
        collapseElement =
            <div className='ms-3'>
                <AdminCategoryList categories={categories} parent={item.id} handleDeleteCategory={handleDeleteCategory} />
            </div>
        collapseIndicator = <ChevronCompactDown />
    } else {
        collapseElement = <></>
        collapseIndicator = <ChevronCompactRight />
    }


    return (
        <>
            <div className="row align-items-center">
                <div className="col-6">
                    <button className='btn w-100 text-start' onClick={() => collapsed ? setCollapsed(false) : setCollapsed(true)}>
                        <span className='me-2'>{collapseIndicator}</span>{item.name}
                    </button>
                </div>
                <div className="col-6 text-end">
                    <Link to={`add/${item.id}`}>
                        <button className="btn btn-link btn-sm">
                            +Subcategory
                        </button>
                    </Link>

                    <Link to={`${item.id}`}>
                        <button className="btn">
                            <PencilSquare />
                        </button>
                    </Link>

                    <button className="btn" onClick={() => handleDeleteCategory(item)}>
                        <Trash />
                    </button>
                </div>
            </div>
            {collapseElement}
        </>
    );
}

export default AdminCategoryItem;