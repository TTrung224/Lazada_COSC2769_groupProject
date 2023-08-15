import { Form, redirect, useNavigate } from "react-router-dom";
import { addCategory } from "./AdminAPI";


export async function addNewCategory({ request, params }) {
    document.querySelector("#cancelBtn").disabled = true
    document.querySelector("#submitBtn").disabled = true
    const formData = await request.formData()
    const newData = Object.fromEntries(formData)
    console.log(newData)
    await addCategory(newData.name)
    return redirect("/admin/category")
}


const AdminAddCategory = () => {
    const navigate = useNavigate()

    return (
        <div className="container">
            <h2>Fill in category information:</h2>
            <Form method="POST">
                <div className="form-group">
                    <label htmlFor="name">Category Name: </label>
                    <input className="form-control" type="text" name="name" id="name" required/>
                </div>
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