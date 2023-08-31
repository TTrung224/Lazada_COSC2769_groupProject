import AdminCategoryList from '../Component/Admin/AdminCategoryList';
import { Link, defer, useLoaderData } from 'react-router-dom';
import { deleteCategory, getCategories } from '../Service/CategoryAPI';
import Navbar from '../Component/Shared/navbar';
import React, { useEffect, useState } from 'react';
import Loader from '../Component/Shared/loader';


export async function loadCategories() {
    const categoriesPromise = getCategories()
    return defer({ data: categoriesPromise })
}


const AdminCategory = () => {
    const { data } = useLoaderData()
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        data.then(c =>
            setCategories(c.data)
        ).finally(() => { setIsLoading(false) })
    }, [data])


    async function handleDeleteCategory(id) {
        setIsLoading(true)
        try {
            const newCategories = categories.filter(c => c._id !== id)
            await deleteCategory(id)
            setCategories(newCategories)
        } catch (err) {
            console.log(err)
            alert(err.message)
        } finally { setIsLoading(false) }
    }

    return (
        <>
            <Navbar />
            {isLoading ? <Loader /> : <></>}
            <div className="container">
                <h2>Category</h2>
                <hr />
                <Link to={"add"}><button className="btn btn-primary mt-4">Add Category</button></Link>
                <AdminCategoryList categories={categories} parent={null} handleDeleteCategory={handleDeleteCategory} />
            </div>
        </>

    );
}

export default AdminCategory;