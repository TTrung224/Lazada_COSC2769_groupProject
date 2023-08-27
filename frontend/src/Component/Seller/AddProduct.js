import { Link } from 'react-router-dom';
import Navbar from '../Shared/navbar';
export default function AddProduct(){

    var categoryList = [
        {id:"1",name:"cat1"},
        {id:"2",name:"cat2"},
        {id:"3",name:"cat3"}
    ]

    var currenyCategory

    function handleInput(e){
       currenyCategory = e.target.value
        
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
                            <option value="#">Sellect</option>
                            {categoryList.map(category =>{
                                return(                      
                                    <option value={category.id}>{category.name}</option>                                                                                                     
                                )
                            })}
                        </select>
                        {categoryList.map(category=>(
                            <div className='category-attribute-input'>
                                <label for="attribute1">{category.name} attribute</label>
                                <input type="text"  id="attribute1" value="box1"/>
                                <label for="attribute2">{category.name} attribute</label>
                                <input type="text"  id="attribute2" value="box2"/>
                            </div>
                        ))}
                        
                       {/*  */}

                        
                        {/* <div className='category-checkbox2'>
                            <label for="cat2-box1">cat2</label>
                            <input type="checkbox"  id="cat2-box1" value="box1"/>
                            <label for="cat2-box2">cat2</label>
                            <input type="checkbox"  id="cat2-box2" value="box2"/>
                            <label for="cat2-box3">cat2</label>
                            <input type="checkbox"  id="cat2-box3" value="box3"/>
                        </div>
                        <div className='category-checkbox3'>
                            <label for="cat3-box1">cat3</label>
                            <input type="checkbox"  id="cat3-box1" value="box1"/>
                            <label for="cat3-box2">cat3</label>
                            <input type="checkbox"  id="cat3-box2" value="box2"/>
                            <label for="cat3-box3">cat3</label>
                            <input type="checkbox"  id="cat3-box3" value="box3"/>
                        </div> */}
                        
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