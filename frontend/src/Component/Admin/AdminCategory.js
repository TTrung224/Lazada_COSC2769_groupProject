import { useState } from 'react';
import AdminCategoryList from './AdminCategoryList';
import Category from '../../Model/Category'

const categories = [
    new Category(0, "Electronic Devices"),
    new Category(1, "Home Appliances"),
    new Category(2, "Groceries and Snack")
]

categories[0].addSubCat(new Category(3, "Computer"))
categories[0].subCat[0].addSubCat(new Category(6, "Gaming"))
categories[0].subCat[0].addSubCat(new Category(7, "3D Modelling"))
categories[0].addSubCat(new Category(4, "Laptop"))
categories[0].addSubCat(new Category(5, "Headphone"))
categories[1].addSubCat(new Category(8, "Kitchen"))
categories[1].addSubCat(new Category(9, "Living Room"))
categories[2].addSubCat(new Category(10, "Sweet"))
categories[2].addSubCat(new Category(11, "Chips"))


const AdminCategory = () => {
    const [category, setCategory] = useState(categories)

    function handleDeleteCategory(item) {
        // If top category, delete directly
        if(item.parent === null){
            const newCategory = category.filter(c => c !== item)
            setCategory(newCategory)
            return
        }

        // If not top category, remove subCat, then copy subCat array to parent iteratively 
        let parent = item.parent
        let newCategory = parent.subCat.filter(c => c !== item)
        while(parent.parent !== null){
            let prev = parent
            let prevCat = newCategory
            parent = parent.parent
            newCategory = parent.subCat.map(c => {
                if(prev.id === c.id){
                    c.subCat = prevCat
                }
                return c
            })
        }
        setCategory(category.map(c =>{ 
            if(c.id === parent.id){
                c.subCat = newCategory
            }
            return c
        }))
    }

    return (
        <div className="container">
            <h2>Category</h2>
            <button className="btn btn-primary mt-4">Add Category</button>
            <AdminCategoryList categories={category} handleDeleteCategory={handleDeleteCategory} />
        </div>
    );
}

export default AdminCategory;