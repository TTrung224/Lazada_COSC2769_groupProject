import { useState } from 'react';
import AdminCategoryList from './AdminCategoryList';


const test = [
    { id: 0, name: 'Electronic Devices', parent: -1 },
    { id: 1, name: 'Home Appliances', parent: -1 },
    { id: 2, name: 'Groceries and Snack', parent: -1 },
    { id: 3, name: 'Computer', parent: 0 },
    { id: 4, name: 'Laptop', parent: 0 },
    { id: 5, name: 'Kitchen', parent: 1 },
    { id: 6, name: 'Living Room', parent: 1 },
    { id: 7, name: 'Sweet', parent: 2 },
    { id: 8, name: 'Gaming', parent: 3 },
    { id: 9, name: '3D Modelling', parent: 3 }
]

const AdminCategory = () => {
    const [category, setCategory] = useState(test)

    function handleDeleteCategory(item) {
        const newCategory = category.filter(c => c !== item)

        setCategory(newCategory)
    }

    function handleAddTopCategory(category) {

    }

    return (
        <div className="container">
            <h2>Category</h2>
            <button className="btn btn-primary mt-4" onClick={() => handleAddTopCategory()}>Add Category</button>
            <AdminCategoryList categories={category} parent={-1} handleDeleteCategory={handleDeleteCategory} />
        </div>
    );
}

export default AdminCategory;