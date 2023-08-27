import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function ProductList(){

    var productList = [
        {id:"1",name:"fppple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"7000000",category:"fruit,red",addedDate:9},
        {id:"2",name:"cppple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"8000000",category:"fruit,red",addedDate:8},
        {id:"3",name:"dppple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"5000000",category:"fruit,red",addedDate:7},
        {id:"4",name:"appple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"4000000",category:"fruit,red",addedDate:6},
        {id:"5",name:"eppple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"9000000",category:"fruit,red",addedDate:5},
        {id:"6",name:"ippple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"2000000",category:"fruit,red",addedDate:4},
        {id:"7",name:"dppple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"1000000",category:"fruit,red",addedDate:3},
        {id:"8",name:"wppple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"3000000",category:"fruit,red",addedDate:2},
        {id:"9",name:"wppple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"6000000",category:"fruit,red",addedDate:1}
    ]

    const [products,setProduct] = useState(productList)

    const handleDelete =(id) =>{    
        setProduct(products => products.filter(product => product.id !== id))
        alert("Product id: "+id+" deleted")     
    }
    function handleSort(e){
        if(e.target.value ==="name"){
            setProduct(products => products.sort((a,b)=> a.name > b.name ? 1 : -1))
        }else if(e.target.value === "price"){
            setProduct(products => products.sort((a,b)=> a.prize > b.prize ? 1 : -1))
        }else if(e.target.value === "date"){
            setProduct(products => products.sort((a,b)=> a.addedDate > b.addedDate ? 1 : -1))
        }else{
            setProduct(productList)
        }
        console.log(e.target.value)
        
    }


    return(
        <div className='seller-product-container'>
            <div className="seller-product-list">
                    <div className="seller-header-bar">
                        <Link className='add-product' to="/seller/product/addproduct">Add more product</Link>
                        <label for="seller-sort">Sort by:</label>
                        <select id="seller sort" className='seller-select-sort' onChange={(event)=>handleSort(event)}>
                            <option value = "none">None</option>
                            <option value ="name">Name</option>
                            <option value ="price">Price</option>
                            <option value="date">Added date</option>
                        </select>
                    </div>
                    {products.map(product=>{
                        return(
                            <div className="product-item" key={product.id}>
                                <img src={product.img} className="product-img" alt='product img'/>
                                <div className="product-item-middle">
                                    <p>Name: <b>{product.name}</b></p>
                                    <p>Description: <b>{product.description}</b></p>
                                </div>
                                <div className="product-item-right">
                                    <p>Price: <b>{product.prize}</b></p>
                                    <p>Category: <b>{product.category}</b></p>
                                </div>
                                <div className="seller-item-button">
                                    <Link className="item-edit" to="/seller/product/editproduct"><b>Edit</b></Link>
                                    <button className="item-delete" onClick={()=>handleDelete(product.id)}><b>Delete</b></button>
                                </div>
                            </div>
                        )
                        
                    })}  
            </div>
        </div>
    )
}