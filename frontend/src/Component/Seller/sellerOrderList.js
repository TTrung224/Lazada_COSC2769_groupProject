import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function OrderList(){

    
    var productList = [
        {id:1, name:"coffee",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",quantity:3,status:"On delivering"},
        {id:2, name:"coffee",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",quantity:2,status:"delivered"},
        {id:3, name:"coffee",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",quantity:1,status:"canceled"}
    ]
    const [products,setProduct] = useState(productList)

    var orderList = [
        {id:"1",date:"Octorber 18 2023",phone:123,cusName:"Khoi",cusAddress:"HCM D4",status:"shipping",status:"on delivering",productList:products},
        {id:"2",date:"Octorber 18 2023",phone:123,cusName:"Khoi",cusAddress:"HCM D4",status:"shipping",status:"on delivering",productList:products},
        {id:"3",date:"Octorber 18 2023",phone:123,cusName:"Khoi",cusAddress:"HCM D4",status:"shipping",status:"on delivering",productList:products},
        {id:"4",date:"Octorber 18 2023",phone:123,cusName:"Khoi",cusAddress:"HCM D4",status:"shipping",status:"on delivering",productList:products},
        {id:"5",date:"Octorber 18 2023",phone:123,cusName:"Khoi",cusAddress:"HCM D4",status:"shipping",status:"on delivering",productList:products},
        {id:"6",date:"Octorber 18 2023",phone:123,cusName:"Khoi",cusAddress:"HCM D4",status:"shipping",status:"on delivering",productList:products},
        {id:"7",date:"Octorber 18 2023",phone:123,cusName:"Khoi",cusAddress:"HCM D4",status:"shipping",status:"on delivering",productList:products},
        {id:"8",date:"Octorber 18 2023",phone:123,cusName:"Khoi",cusAddress:"HCM D4",status:"shipping",status:"on delivering",productList:products},
        {id:"9",date:"Octorber 18 2023",phone:123,cusName:"Khoi",cusAddress:"HCM D4",status:"shipping",status:"on delivering",productList:products},
        {id:"10",date:"Octorber 18 2023",phone:123,cusName:"Khoi",cusAddress:"HCM D4",status:"shipping",status:"on delivering",productList:products},
    ]


   

    const handleCancel =(id,product) =>{
        if(product.status !=="delivered"){
            setProduct(products => products.filter(product => product.id !== id))
            alert("Product id: "+id+" canceled")
        }else{
            alert("product already delivered, cannot cancel")
        }
       
    }
    return(              
        <div className="seller-order-container">
            <div className="seller-order-list">
                <div className="seller-header-bar">
                    <h3>Order management</h3>
                </div>
                {orderList.map(order =>{
                    return(
                        <div className='order-product-item'>
                            <div className="order-item">
                                <div className="order-item-left">
                                    <p>Order ID: <b>{order.id}</b></p>
                                    <p>Create date: <b>{order.date}</b></p>
                                    
                                </div>
                                <div className="order-item-middle">
                                    <p>Customer name: <b>{order.cusName}</b></p>
                                    <p>Customer address: <b>{order.cusAddress}</b></p>
                                </div>
                                <div className="order-item-right">
                                    <p>Customer phone number: <b>{order.phone}</b></p>
                                    <p>Status: <b>{order.status}</b></p>
                                </div>
                                
                            </div>
                            {order.productList.map(product =>{
                                return(
                                    <div className='order-products'>
                                        <div className='order-product-left'>
                                        <p>ID: <b>{product.id}</b></p>
                                        <img src={product.img} className="order-img"/>
                                        </div>
                                        <div className='order-item-middle'>
                                            <p>Product name: <b>{product.name}</b></p>
                                            <p>Quantity: <b>{product.quantity}</b></p>
                                            <p>Status: <b>{product.status}</b></p>
                                        </div>
                                        <div className="order-item-button">
                                            <button className="order-item-shipped">shipped</button>
                                            <button className="order-item-cancel" onClick={()=>handleCancel(product.id,product)}>cancel</button>
                                        </div>
                                    </div>
                                    )
                                }   
                            )}
                            
                        </div>
                        
                    )
                })}
                
            </div>
        </div>
        
    )
}