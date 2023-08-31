import { Form, redirect, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/navbar';
import { useContext, useEffect, useState } from 'react';
import { getCategories } from '../../Service/CategoryAPI';
import Loader from '../Shared/loader';
import { axiosSetting } from "../../Context/constants"
import { createProduct } from '../../Service/ProductAPI';
import { AuthContext } from '../../Context/loginSessionContext';

async function loadCategories() {
    try {
        const result = await getCategories()
        return result.data
    } catch {
        alert("Error loading categories")
        return []
    }
}

export async function addProduct({ request }) {
    const formData = await request.formData()
    await createProduct(formData)
    return redirect("/seller/product")
}



export default function ProductForm({ state }) {
    const { authState: { user } } = useContext(AuthContext)

    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [attributes, setAttributes] = useState([])

    useEffect(() => {
        loadCategories().then(res => {
            setCategories(res)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])



    function handleInput(e) {
        const newAttributes = getAttributes(e.target.value)
        setAttributes(newAttributes)
    }

    function getAttributes(categoryId) {

        if (categoryId === "") { return [] }

        let attributeFields = []
        let currentId = categoryId
        while (currentId !== null) {
            const cate = categories.find(c => c._id === currentId)
            attributeFields = attributeFields.concat(cate.attributes)
            currentId = cate.parentCategoryId
        }
        return attributeFields.reverse()
    }

    return (
        <>
            <Navbar />
            {isLoading ? <Loader /> : <></>}
            <div className="container rounded border shadow p-5 my-5">
                <Form method='POST' encType='multipart/form-data'>

                    <h2>Product Form</h2>

                    <div className="form-group mb-3">
                        <label for="productImg">Product Image</label>
                        <input className='form-control' type='file' name='productImg' id='productImg' required />
                    </div>


                    <div className="form-group mb-3">
                        <label for="productName">Product Name</label>
                        <input className='form-control' type='text' name='productName' id="productName" placeholder='Name of Product' required />
                    </div>


                    <div className="row mb-3">
                        <div className="col">
                            <label for="productPrice">Product Price</label>
                            <div className="input-group">
                                <input className='form-control' min={500} type='number' name='productPrice' id="productPrice" placeholder='Price of Product' required />
                                <span className="input-group-text">VND</span>
                            </div>

                        </div>

                        <div className="col">
                            <label for="productCat">Product Category</label>
                            <select className='form-control' name="productCategory" placeholder='add product category' onChange={event => handleInput(event)} required>
                                <option value="" disabled>Select a category for your product</option>
                                {categories.map(category => {
                                    return (
                                        <option key={category._id} value={category._id}>{category.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <input type="hidden" name="attributeValues" value={JSON.stringify(attributes)} />
                    <input type="hidden" name="productSeller" value={user._id}/>

                    <div className="form-group mb-3">
                        <p className='mb-1'>Product Attributes</p>
                        {attributes.map((a, index) => (
                            <div className="row container align-items-center mb-2">
                                <div key={index} className="col-auto">
                                    <label htmlFor={a.name}>{a.name} {a.required ? "(Required)" : "(Optional)"}</label>
                                </div>
                                <div className="col-auto">
                                    <input className='form-control' type={a.type} name={a.name} id={a.name} required={a.required} />
                                </div>

                            </div>
                        ))}
                    </div>


                    <div className="mb-3">
                        <label for="add-product-des">Product Description</label>
                        <textarea className='form-control' name="productDesc" id="productDesc" cols="30" rows="10" minLength={50} maxLength={1000} required />
                    </div>


                    <button type="submit" className='btn btn-primary btn-lg me-3'>Submit</button>
                    <button type="button" className="btn btn-secondary btn-lg" onClick={() => { navigate(-1) }}>Cancel</button>

                </Form>

            </div>
        </>

    )
}