import AdminCategoryItem from './AdminCategoryItem';

const AdminCategoryList = ({categories, handleDeleteCategory}) => {
    return ( 
        <div className="list-group my-3">
                {categories.map(c => {
                    return (
                        <div className="list-group-item"    >
                            <AdminCategoryItem key={c.id} item={c} handleDeleteCategory={handleDeleteCategory}/>
                        </div>
                    )
                })}
            </div>
     );
}
 
export default AdminCategoryList;