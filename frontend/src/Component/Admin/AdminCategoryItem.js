import { useState } from 'react'
import AdminCategoryList from "./AdminCategoryList";
import { Link } from 'react-router-dom';

const AdminCategoryItem = ({ categories, item, handleDeleteCategory }) => {
    const [collapsed, setCollapsed] = useState(true)
    let collapseElement = <></>
    let collapseIndicator = <i className='bi-chevron-compact-right' />
    if (!collapsed) {
        collapseElement =
            <div className='ms-3'>
                <AdminCategoryList categories={categories} parent={item.id} handleDeleteCategory={handleDeleteCategory} />
            </div>
        collapseIndicator = <i className='bi-chevron-compact-down' />
    } else {
        collapseElement = <></>
        collapseIndicator = <i className='bi-chevron-compact-right' />
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
                    <Link to={`add/${item.id}`} state={{for: 'subCategory'}}>
                        <button className="btn btn-link btn-sm">
                            +Subcategory
                        </button>
                    </Link>

                    <Link to={`${item.id}`} state={{for: 'edit'}}>
                        <button className="btn">
                            <i className="bi-pencil-square"></i>
                        </button>
                    </Link>

                    <button className="btn" onClick={() => handleDeleteCategory(item)}>
                        <i className="bi-trash"></i>
                    </button>
                </div>
            </div>
            {collapseElement}
        </>
    );
}

export default AdminCategoryItem;