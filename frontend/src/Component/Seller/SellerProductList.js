import { Link } from 'react-router-dom';
export default function ProductList(){

        var productList = [
            {name:"appple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"1000000",category:"fruit,red"},
            {name:"appple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"1000000",category:"fruit,red"},
            {name:"appple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"1000000",category:"fruit,red"},
            {name:"appple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"1000000",category:"fruit,red"},
            {name:"appple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"1000000",category:"fruit,red"},
            {name:"appple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"1000000",category:"fruit,red"},
            {name:"appple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"1000000",category:"fruit,red"},
            {name:"appple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"1000000",category:"fruit,red"},
            {name:"appple",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",description: "eifjghsfuighuifghfdffgrgergwerg",prize:"1000000",category:"fruit,red"}
        ]

    return(
        <div className='seller-product-container'>
            <div className="seller-product-list">
                    <div className="seller-header-bar">
                        <Link className='add-product' to="/seller/product/addproduct">Add more product</Link>
                        <input type="search" placeholder='search for product'/>
                    </div>
                    {productList.map(product=>{
                        return(
                            <div className="product-item">
                                <img src={product.img} className="product-img"/>
                                <div className="product-item-middle">
                                    <p>{product.name}</p>
                                    <p>{product.description}</p>
                                </div>
                                <div className="product-item-right">
                                    <p>{product.prize}</p>
                                    <p>{product.category}</p>
                                </div>
                                <div className="seller-item-button">
                                    <button className="item-edit">Edit</button>
                                    <button className="item-delete">Delete</button>
                                </div>
                            </div>
                        )
                        
                    })}  
            </div>
        </div>
    )
}