import { Link } from 'react-router-dom';
import Navbar from '../Shared/navbar';
import { useEffect, useState } from 'react';
import axios from 'axios'

async function loadProduct(){}
async function loadCategories(){}
async function saveProduct(){

}

export default function AddProduct(){
    const [isLoading, setIsLoading] = useState(true)
    var categoryList = [
        {id:"1",name:"cat1"},
        {id:"2",name:"cat2"},
        {id:"3",name:"cat3"}
    ]


    

    const[currenyCategory,setCurrentCategory] = useState("null")
     

    function handleInput(e){
        setCurrentCategory(e.target.value)
       console.log(currenyCategory)
        
    }
    return(
        <>
            <Navbar/>
            <div className="container border shadow p-5 my-5">
                <h2>Add Product</h2>
                <div className='product-add-input'>
                    <div class="product-add-child product-add-child-left">
                        <label for="add-product-img">Product img</label>
                        <input type='text' id="add-product-img" placeholder='add img URL' />
                        <label for="add-product-name">Product name</label>
                        <input type='text' id="add-product-name" placeholder='add product name' />
                        <label for="add-product-des">Product description</label>
                        <input type='text' id="add-product-des" placeholder='add product description' />
                    </div>
                    <div class="product-add-child">
                        <label for="add-product-price">Product price</label>
                        <input type='text' id="add-product-price" placeholder='add product price' />
                        <label for="add-product-category">Product category</label>
                        <select type='text' id="add-product-category" placeholder='add product category' onChange={event=>handleInput(event)}>
                            {categoryList.map(category =>{
                                return(                      
                                    <option value={category.id}>{category.name}</option>                                
                                )
                            })}
                        </select>                                                
                    </div>     
                </div>
                <button type="button" className='btn btn-primary'>Submit</button>
                <button type="button" className="btn btn-secondary">Cancel</button>
            </div>
        </>
        
    )
}