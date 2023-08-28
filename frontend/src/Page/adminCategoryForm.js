import { Form, redirect, useLocation, useNavigate, useParams } from "react-router-dom";
import { addCategory, getCategoryWithParents, updateCategory } from "../Component/Admin/AdminAPI";
import React, { useEffect, useState } from "react";
import AdminAttributeList from "../Component/Admin/AdminAttributeList";
import AdminAddAttribute from "../Component/Admin/AdminAddAttribute";
import Navbar from "../Component/Shared/navbar";
import Loader from "../Component/Shared/loader";


export async function addNewCategory({ request }) {
    document.querySelector("#cancelBtn").disabled = true
    document.querySelector("#submitBtn").disabled = true
    const formData = await request.formData()
    const newData = (({ name, attributes, parentCategoryId }) => ({ name, attributes, parentCategoryId }))(Object.fromEntries(formData))
    newData.attributes = JSON.parse(newData.attributes)
    if (newData.parentCategoryId === "") {
        newData.parentCategoryId = null
    }
    try {
        await addCategory(newData)
    } catch (err){
        console.log(err)
        alert(err.message)
    }finally{
        return redirect("/admin/product-category")
    }
}

export async function loadCategory(categoryId) {
    // Load category and all of its parents
    const category = await getCategoryWithParents(categoryId)
    return category
}


export async function saveCategory({ request, params }) {
    document.querySelector("#cancelBtn").disabled = true
    document.querySelector("#submitBtn").disabled = true
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const updatedCategory = { name: data.name, attributes: JSON.parse(data.attributes), parentCategoryId: data.parentCategoryId === "" ? null : data.parentCategoryId }
    try {
        console.log(params.categoryId)
        await updateCategory(params.categoryId, updatedCategory)
    } catch (err){
        console.log(err)
        alert(err.message)
    }finally{
        return redirect("/admin/product-category")
    }

}


const AdminCategoryForm = () => {
    const navigate = useNavigate()
    const { categoryId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [categories, setCategories] = useState(null)
    const [attributes, setAttributes] = useState([])
    const { state } = useLocation()

    useEffect(() => {
        if (categoryId) {
            loadCategory(categoryId).then(c => {
                if (c.status === 200) {
                    setCategories(c.data)
                    if (state.for === "edit") {
                        setAttributes(c.data[0].attributes)
                    }
                }
            }).finally(() => { setIsLoading(false); })
        } else { setIsLoading(false) }
    }, [categoryId])

    let name = ""
    let parentId = ""
    let parentAttributes = <></>

    // If edit, LoaderData will be defined. Assign its values to default values
    // If add subcategory, an empty category with parent id is used to display default values  
    if (categories) {
        const category = state.for === 'subCategory' ? { _id: "noId", name: '', attributes: [], parentCategoryId: categories[0]._id } : categories[0]
        name = category.name
        parentId = category.parentCategoryId ? category.parentCategoryId : ""
        parentAttributes =
            <div className="form-group my-4">
                <h5>Parent{'(s)'}: </h5>
                <ol>
                    {categories.toReversed().map((c) => {
                        if (c._id !== category._id) {
                            return (
                                <li key={c._id}>
                                    <h6>{c.name}</h6>
                                    <AdminAttributeList attributes={c.attributes} allowDelete={false} />
                                </li>
                            )
                        }
                        return <React.Fragment key={c._id}></React.Fragment>
                    })}
                </ol>
            </div>
    }

    function addAttribute(name, type, required) {
        const newAttributes = [...attributes, { name: name, type: type, required: required }]
        setAttributes(newAttributes)
    }
    function deleteAttribute(attribute) {
        const newAttributes = attributes.filter(c => c !== attribute)
        setAttributes(newAttributes)
    }

    return (
        <>
            <Navbar />
            {isLoading ? <Loader /> : <></>}
            <div className="container">
                <h2>Fill in category information:</h2>
                <hr />
                <Form method="POST">
                    <div className="form-group my-4">
                        <label className="h5" htmlFor="name">Category Name: </label>
                        <input className="form-control" type="text" name="name" id="name" defaultValue={name} required />
                    </div>



                    {parentAttributes}
                    <div className="form-group my-4">
                        <h5>Attributes:</h5>
                        <AdminAttributeList attributes={attributes} allowDelete={true} deleteAttribute={deleteAttribute} />
                        <AdminAddAttribute addAttribute={addAttribute} />
                    </div>

                    {/* To add values of attributes and parent into the FormData of POST request */}
                    <input name="attributes" id="attributes" type="hidden" value={JSON.stringify(attributes)} />
                    <input name="parentCategoryId" id="parentCategoryId" type="hidden" value={parentId} />

                    {/* Submit, Cancel buttons */}
                    <hr />
                    <div className="my-3">
                        <input id="submitBtn" className="btn btn-primary" type="submit" value="Save" />
                        <input id="cancelBtn" className="btn btn-secondary ms-2" type="button" value="Cancel" onClick={() => {
                            navigate(-1)
                            document.querySelector("#cancelBtn").disabled = true
                            document.querySelector("#submitBtn").disabled = true
                        }} />
                    </div>
                </Form>
            </div>
        </>
    );
}

export default AdminCategoryForm;