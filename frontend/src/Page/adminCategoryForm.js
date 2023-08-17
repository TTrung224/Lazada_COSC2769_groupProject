import { Form, redirect, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { addCategory, getCategory, updateCategory } from "../Component/Admin/AdminAPI";
import React, { useState } from "react";
import AdminAttributeList from "../Component/Admin/AdminAttributeList";
import AdminAddAttribute from "../Component/Admin/AdminAddAttribute";


export async function addNewCategory({ request }) {
    document.querySelector("#cancelBtn").disabled = true
    document.querySelector("#submitBtn").disabled = true
    const formData = await request.formData()
    const newData = Object.fromEntries(formData)
    await addCategory(newData.name, JSON.parse(newData.attributes), parseInt(newData.parent))
    return redirect("/admin/product-category")
}

export async function loadCategory({ params }) {
    // Load category and all of its parents
    const category = [await getCategory(parseInt(params.categoryID))]
    let parent = category[0].parent

    while (parent !== -1) {
        let parentCat = await getCategory(parseInt(parent))
        category.push(parentCat)
        parent = parentCat.parent
    }

    return category
}


export async function saveCategory({ request, params }) {
    document.querySelector("#cancelBtn").disabled = true
    document.querySelector("#submitBtn").disabled = true
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const updatedCategory = { name: data.name, attributes: JSON.parse(data.attributes), parent: parseInt(data.parent) }
    await updateCategory(parseInt(params.categoryID), updatedCategory)
    return redirect("/admin/product-category")
}


const AdminCategoryForm = () => {
    const navigate = useNavigate()
    const categories = useLoaderData()
    const { state } = useLocation()

    let name = ""
    let attr = []
    let parentVal = -1
    let parentAttributes = <></>

    // If edit, LoaderData will be defined. Assign its values to default values
    // If add subcategory, an empty category with parent id is used to display default values  
    if (categories) {
        
        const category = state.for === 'subCategory' ? {id: -1, name: '', attributes: [], parent: categories[0].id } : categories[0]
        
        name = category.name
        attr = category.attributes
        parentVal = category.parent
        parentAttributes =
            <div className="form-group my-4">
                <h5>Parent{'(s)'}: </h5>
                <ol>
                    {categories.toReversed().map((c) => {
                        if (c.id !== category.id) {
                            return (
                                <li key={c.id}>
                                    <h6>{c.name}</h6>
                                    <AdminAttributeList attributes={c.attributes} allowDelete={false} />
                                </li>
                            )
                        }
                        return <React.Fragment key={c.id}></React.Fragment>
                    })}
                </ol>
            </div>
    }

    const [attributes, setAttributes] = useState(attr)
    function addAttribute(name, type, required) {
        const newAttributes = [...attributes, { name: name, type: type, required: required }]
        setAttributes(newAttributes)
    }
    function deleteAttribute(attribute) {
        const newAttributes = attributes.filter(c => c !== attribute)
        setAttributes(newAttributes)
    }


    return (
        <div className="container">
            <h2>Fill in category information:</h2>
            <hr />
            <Form method="POST" onSubmit={() => {
                const request = { attributes: attributes }
                return request
            }}>
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
                <input name="parent" id="parent" type="hidden" value={parentVal} />

                {/* Submit, Cancel buttons */}
                <hr />
                <div className="mt-3">
                    <input id="submitBtn" className="btn btn-primary" type="submit" value="Save" />
                    <input id="cancelBtn" className="btn btn-secondary ms-2" type="button" value="Cancel" onClick={() => {
                        navigate(-1)
                        document.querySelector("#cancelBtn").disabled = true
                        document.querySelector("#submitBtn").disabled = true
                    }} />
                </div>
            </Form>
        </div>
    );
}

export default AdminCategoryForm;