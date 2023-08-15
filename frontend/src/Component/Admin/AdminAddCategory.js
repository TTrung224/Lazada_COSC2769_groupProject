import { Form, redirect, useNavigate } from "react-router-dom";
import { addCategory } from "./AdminAPI";
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


const AdminAddCategory = () => {
    const navigate = useNavigate()

    const [attributes, setAttributes] = useState([])
    function addAttribute(name, type, required){
        const newAttributes = [...attributes, {name: name, type: type, required: required}]
        setAttributes(newAttributes)
    } 
    function deleteAttribute(attribute){
        const newAttributes = attributes.filter(c => c !== attribute)
        setAttributes(newAttributes)
    }

    return (
        <div className="container my-5">
            <h2>Fill in category information:</h2>
            <hr />
            <Form method="POST" onSubmit={() => {
                const request = {attributes: attributes}
                return request
            }}>
                <div className="form-group my-2">
                    <label className="h5" htmlFor="name">Category Name: </label>
                    <input className="form-control" type="text" name="name" id="name" required />
                </div>

                <div className="form-group my-2">
                    <h5>Attributes:</h5>
                    <AdminAttributeList attributes={attributes} deleteAttribute={deleteAttribute}/>
                    <AdminAddAttribute addAttribute={addAttribute} />
                </div>
                <input name="attributes" id="attributes" type="hidden" value={JSON.stringify(attributes)} />
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