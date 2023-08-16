import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { addCategory, getCategory, updateCategory } from "./AdminAPI";
import { useState } from "react";
import AdminAttributeList from "./AdminAttributeList";
import AdminAddAttribute from "./AdminAddAttribute";


export async function addNewCategory({ request }) {
    document.querySelector("#cancelBtn").disabled = true
    document.querySelector("#submitBtn").disabled = true
    const formData = await request.formData()
    const newData = Object.fromEntries(formData)
    await addCategory(newData.name, JSON.parse(newData.attributes))
    return redirect("/admin/category")
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
    return redirect("/admin/category")
}


const AdminAddCategory = () => {
    const navigate = useNavigate()
    const categories = useLoaderData()
    
    let name = ""
    let attr = []
    let parentVal = -1
    let parentAttributes =<></>

    // If edit, LoaderData will be defined. Assign its values to default values
    if (categories) {
        const category = categories[0]
        name = category.name
        attr = category.attributes
        parentVal = category.parent
        parentAttributes =
        <div className="form-group my-4">
            <h5>Parent{'(s)'}: </h5>
            <ol>
                {categories.toReversed().map((c, i) => {
                if (i < categories.length - 1) {
                    return (
                        <li>
                            <h6>{c.name}</h6>
                            <AdminAttributeList attributes={c.attributes} allowDelete={false} />
                        </li>
                    )
                }
                return <></>
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
        <div className="container my-5">
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

export default AdminAddCategory;