import React from 'react';
import AdminCategoryItem from './AdminCategoryItem';

const AdminCategoryList = ({ categories, parent, handleDeleteCategory }) => {
    return (
        <div className="list-group my-3">
            {categories.map((c) => {
                if (c.parent === parent) {
                    return (
                        <div key={c.id} className="list-group-item"    >
                            <AdminCategoryItem categories={categories} item={c} handleDeleteCategory={handleDeleteCategory} />
                        </div>
                    )
                }
                return <React.Fragment key={c.id}></React.Fragment>
            })}
        </div>
    );
}

export default AdminCategoryList;