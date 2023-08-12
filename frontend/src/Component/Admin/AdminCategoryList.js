import AdminCategoryItem from './AdminCategoryItem';

const AdminCategoryList = ({categories}) => {
    return ( 
        <div className="list-group my-3">
                {categories.map(c => {
                    return (
                        <div className="list-group-item"    >
                            <AdminCategoryItem item={c}/>
                        </div>
                    )
                })}
            </div>
     );
}
 
export default AdminCategoryList;