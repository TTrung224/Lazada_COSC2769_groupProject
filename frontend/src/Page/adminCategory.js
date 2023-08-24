import AdminCategoryList from '../Component/Admin/AdminCategoryList';
import { Await, Link, defer, useFetcher, useLoaderData } from 'react-router-dom';
import { deleteCategory, getCategories } from '../Component/Admin/AdminAPI';
import Navbar from '../Component/Shared/navbar';
import React, { useEffect } from 'react';
import Loader from '../Component/Shared/loader';


export async function loadCategories() {
    const categoriesPromise = getCategories()
    return defer({ categories: categoriesPromise })
}

export async function handleDeleteCategory({ request }) {
    const formData = await request.formData()
    const id = formData.get("categoryId")
    await deleteCategory(id)
    return null 
}

const AdminCategory = () => {
    const data = useLoaderData()
    const fetcher = useFetcher()


    return (
        <>
            <Navbar />
            <div className="container">
                <h2>Category</h2>
                <hr />

                {fetcher.state !== 'idle' ? <Loader/> : <></>}
                <React.Suspense fallback={<Loader />}>
                    <Await resolve={data.categories}>
                        {
                            (categories) => (
                                <>
                                    <Link to={"add"}><button className="btn btn-primary mt-4">Add Category</button></Link>
                                    <AdminCategoryList categories={categories} parent={-1} fetcher={fetcher} />
                                </>
                            )
                        }

                    </Await>
                </React.Suspense>
            </div>
        </>

    );
}

export default AdminCategory;