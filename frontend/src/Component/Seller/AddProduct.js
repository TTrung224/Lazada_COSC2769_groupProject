import { Link } from 'react-router-dom';
import Navbar from '../Shared/navbar';
import { useState } from 'react';

export default function AddProduct(){

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
        <div className='add-product-grandparent'>
            <Navbar/>
            <div className="add-product-container">
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
                        <label for="add-product-id">Product id</label>
                        <input type='text' id="add-product-id" placeholder='add product id test' />
                        <label for="add-product-price">Product price</label>
                        <input type='text' id="add-product-price" placeholder='add product price' />
                        <label for="add-product-category">Product category</label>
                        <select type='text' id="add-product-category" placeholder='add product category' onChange={event=>handleInput(event)}>
                            <option value="null">Sellect</option>
                            {categoryList.map(category =>{
                                return(                      
                                    <option value={category.id}>{category.name}</option>                                                                                                     
                                )
                            })}
                        </select>
                       {currenyCategory ==="1"?(
                            <div className='category-attribute-input'>
                                <label for="attribute1">cat1 attribute</label>
                                <input type="text"  id="attribute1" placeholder='input attribute'/>
                                <label for="attribute2">cat1 attribute</label>
                                <input type="text"  id="attribute2" placeholder='input attribute'/>
                            </div>
                       ):""}
                      {currenyCategory ==="2"?(
                            <div className='category-attribute-input'>
                                <label for="attribute1">cat2 attribute</label>
                                <input type="text"  id="attribute1" placeholder='input attribute'/>
                                <label for="attribute2">cat2 attribute</label>
                                <input type="text"  id="attribute2" placeholder='input attribute'/>
                            </div>
                       ):""}
                       {currenyCategory ==="3"?(
                            <div className='category-attribute-input'>
                                <label for="attribute1">cat3 attribute</label>
                                <input type="text"  id="attribute1" placeholder='input attribute'/>
                                <label for="attribute2">cat3 attribute</label>
                                <input type="text"  id="attribute2" placeholder='input attribute'/>
                            </div>
                       ):""}
                            
                     
                                                                     
                    </div>     
                </div>
                <div className='product-add-button'>
                    <Link to='/seller/product' className='product-add'>Add</Link>
                    <Link to='/seller/product' className='product-cancel'>Cancel</Link>
                </div>
                
            </div>
        </div>
        
    )
}