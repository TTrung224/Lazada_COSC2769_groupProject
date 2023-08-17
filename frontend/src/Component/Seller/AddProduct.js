import { Link } from 'react-router-dom';
import Navbar from '../Shared/navbar';
export default function AddProduct(){
    // var img = document.querySelector('#add-product-img').value
    // var name = document.querySelector('#add-product-name').value
    // var description = document.querySelector('#add-product-des').value
    // var id = document.querySelector('#add-product-id').value
    // var price = document.querySelector('#add-product-category').value
    // var product = {img:img,name:name,description:description,id:id,price:price}
    return(
        <>
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
                        <input type='text' id="add-product-category" placeholder='add product category'/>
                    </div>     
                </div>
                <div className='product-add-button'>
                    <Link to='/seller/product' className='product-add'>Add</Link>
                    <Link to='/seller/product' className='product-cancel'>Cancel</Link>
                </div>
                
            </div>
        </>
        
    )
}