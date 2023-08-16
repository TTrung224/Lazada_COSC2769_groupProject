import { useState } from 'react';
import AdminCategoryList from '../Component/Admin/AdminCategoryList';
import { Link, useLoaderData } from 'react-router-dom';
import { getCategories } from '../Component/Admin/AdminAPI';


export async function loadCategories(){
    const categories = await getCategories()
    return categories
}

const AdminCategory = () => {
    const data = useLoaderData()
    const [category, setCategory] = useState(data)

    function handleDeleteCategory(item) {
        // TODO: CAN ONLY DELETE IF NO ITEM IS UNDER THE CATEGORY
        const newCategory = category.filter(c => c !== item)
        setCategory(newCategory)
    }

    // TODO: EDIT + ADD ATTRIBUTES AND STUFF, CAN ONLY EDIT IF NO ITEM UNDER CATEGORY
    // TODO: ADD CATEGORY
    // TODO: ADD SUBCATEGORY, SUBCATEGORY MUST INHERIT ALL ATTRIBUTES OF PARENT

    return (
        <div className="container">
            <h2>Category</h2>
            <Link to={"add"}><button className="btn btn-primary mt-4">Add Category</button></Link>
            <AdminCategoryList categories={category} parent={-1} handleDeleteCategory={handleDeleteCategory} />
        </div>
    );
}

export default AdminCategory;