import { Link } from 'react-router-dom';
import { useState,useRef } from 'react';
export default function ProductList(){

    var productList = [
        {id:"1",name:"fppple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:7000000,category:"fruit,red",addedDate:"1/1/2012"},
        {id:"2",name:"cppple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:8000000,category:"fruit,red",addedDate:"1/2/2012"},
        {id:"3",name:"dppple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:5000000,category:"fruit,red",addedDate:"1/3/2012"},
        {id:"4",name:"appple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:4000000,category:"fruit,red",addedDate:"1/4/2012"},
        {id:"5",name:"eppple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:9000000,category:"fruit,red",addedDate:"1/5/2012"},
        {id:"6",name:"ippple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"2000000",category:"fruit,red",addedDate:"1/6/2012"},
        {id:"7",name:"dppple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"1000000",category:"fruit,red",addedDate:"1/7/2012"},
        {id:"8",name:"wppple2",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"3000000",category:"fruit,red",addedDate:"1/1/2016"},
        {id:"9",name:"wppple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"6000000",category:"fruit,red",addedDate:"1/1/2015"}
    ]

    

    const [products,setProduct] = useState(productList)
    const [search, setSearch] = useState("")

    
    const handleDelete =(id) =>{    
        setProduct(products => products.filter(product => product.id !== id))
        alert("Product id: "+id+" deleted")     
    }
    function handleSearch(product){
        if(search.toLowerCase() ===""){
            return product
        }else if(product.name?.toLowerCase().includes(search) || String(product.price)?.includes(search) || product.addedDate?.includes(search)){
            return  product
        }
    }
    var currentSort = useRef("")
    function handleSort(){
        if(currentSort.current.value === "name"){
            const newProducts = [...products].sort((a,b)=> a.name > b.name ? 1 : -1)
            setProduct(newProducts)
        }else if(currentSort.current.value === "price"){
            const newProducts = [...products].sort((a,b)=> a.prize > b.prize ? 1 : -1)
            setProduct(newProducts)
        }else if(currentSort.current.value === "date"){
            const newProducts = [...products].sort((a,b)=> a.addedDate.split('/').reverse().join().localeCompare(b.addedDate.split('/').reverse().join()))
            setProduct(newProducts) 
        }else{
            setProduct(productList)
        }
    }


    return(
        <div className='seller-product-container'>
            <div className="seller-product-list">
                    <div className="seller-header-bar">
                        <Link className='add-product' to="/seller/product/addproduct">Add more product</Link>
                        <label for="seller-sort">Sort by:</label>
                        <select id="seller sort" className='seller-select-sort' ref={currentSort} onChange={()=>handleSort()}>
                            <option value ="null">None</option>
                            <option value ="name">Name</option>
                            <option value ="price">Price</option>
                            <option value="date">Added date</option>
                        </select>
                        <input type="text" placeholder='search product' onChange={(e) =>setSearch(e.target.value)}/>
                        <p>{search}</p>
                    </div>
                    {products.filter(product=>handleSearch(product)).map(product=>{
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
                                    <p>Added Date: <b>{product.addedDate}</b></p>
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