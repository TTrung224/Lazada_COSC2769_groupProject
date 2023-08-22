import { Link } from 'react-router-dom';
import Navbar from '../Shared/navbar';
export default function AddProduct(){

        var categoryList = [
            {name:"Category 1",value:"category1",attribute:{}},
            {name:"Category 2",value:"category2",attribute:{}},
            {name:"Category 3",value:"category3",attribute:{}},
        ]

        function addAttribute(e){
            if(e.target.checked){      
                alert("box is checked")            
            }
        }


    function handleCheckbox(e){
        var checkbox1 = document.querySelector(".category-checkbox1")
        var checkbox2 = document.querySelector(".category-checkbox2")
        var checkbox3 = document.querySelector(".category-checkbox3")
        if(e.target.value === "category1"){
            checkbox1.style.display = "block"
            checkbox2.style.display = "none"
            checkbox3.style.display = "none"
        }
        else if(e.target.value === "category2"){
            checkbox2.style.display = "block"
            checkbox1.style.display = "none"
            checkbox3.style.display = "none"
        }
        else if(e.target.value === "category3"){
            checkbox3.style.display = "block"
            checkbox1.style.display = "none"
            checkbox2.style.display = "none"
        }
        else{
            checkbox1.style.display = "none"
            checkbox2.style.display = "none"
            checkbox3.style.display = "none"
        }
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
                        <select type='text' id="add-product-category" placeholder='add product category' onChange={event=>handleCheckbox(event)}>
                            <option value="#">Sellect</option>
                            {categoryList.map(category =>{
                                return(
                                    <option value={category.value}>{category.name}</option>
                                )
                            })}
                        </select>

                        <div className='category-checkbox1'>
                            <label for="cat1-box1">cat1</label>
                            <input type="checkbox"  id="cat1-box1" value="box1" onChange={(event)=>addAttribute(event)}/>
                            <label for="cat1-box2">cat1</label>
                            <input type="checkbox"  id="cat1-box2" value="box2"/>
                            <label for="cat1-box3">cat1</label>
                            <input type="checkbox"  id="cat1-box3" value="box3"/>
                        </div>
                        <div className='category-checkbox2'>
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
                        </div>
                        
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