import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function OrderList(){

    var orderList = [
        {id:"1",date:"Octorber 18 2023",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",cusName:"Khoi",cusAddress:"HCM D4",name:"apple",quantity:3,status:"shipping"},
        {id:"2",date:"Octorber 18 2023",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",cusName:"Khoi",cusAddress:"HCM D4",name:"apple",quantity:3,status:"shipping"},
        {id:"3",date:"Octorber 18 2023",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",cusName:"Khoi",cusAddress:"HCM D4",name:"apple",quantity:3,status:"shipping"},
        {id:"4",date:"Octorber 18 2023",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",cusName:"Khoi",cusAddress:"HCM D4",name:"apple",quantity:3,status:"shipping"},
        {id:"5",date:"Octorber 18 2023",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",cusName:"Khoi",cusAddress:"HCM D4",name:"apple",quantity:3,status:"shipping"},
        {id:"6",date:"Octorber 18 2023",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",cusName:"Khoi",cusAddress:"HCM D4",name:"apple",quantity:3,status:"shipping"},
        {id:"7",date:"Octorber 18 2023",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",cusName:"Khoi",cusAddress:"HCM D4",name:"apple",quantity:3,status:"shipping"},
        {id:"8",date:"Octorber 18 2023",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",cusName:"Khoi",cusAddress:"HCM D4",name:"apple",quantity:3,status:"shipping"},
        {id:"9",date:"Octorber 18 2023",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",cusName:"Khoi",cusAddress:"HCM D4",name:"apple",quantity:3,status:"shipping"},
        {id:"10",date:"Octorber 18 2023",img:"https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180",cusName:"Khoi",cusAddress:"HCM D4",name:"apple",quantity:3,status:"shipping"},
    ]

    const [orders,setOrder] = useState(orderList)

    const handleCancel =(id) =>{
        setOrder(products => products.filter(product => product.id !== id))
        alert("Order id: "+id+" canceled")
    }
    return(              
        <div className="seller-order-container">
            <div className="seller-order-list">
                <div className="seller-header-bar">
                    <h3>Order management</h3>
                </div>
                {orders.map(order =>{
                    return(
                        <div className="order-item">
                            <div className="order-item-left">
                                <p>ID: <b>{order.id}</b></p>
                                <p>Create date: <b>{order.date}</b></p>
                                <img src={order.img} className="order-img"/>
                            </div>
                            <div className="order-item-middle">
                                <p>Customer name: <b>{order.cusName}</b></p>
                                <p>Customer address: <b>{order.cusAddress}</b></p>
                                <p>Product name: <b>{order.name}</b></p>
                            </div>
                            <div className="order-item-right">
                                <p>Product quantity</p>
                                <p>Product status</p>
                            </div>
                            <div className="order-item-button">
                                <button className="order-item-shipped">shipped</button>
                                <button className="order-item-cancel" onClick={()=>handleCancel(order.id)}>cancel</button>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
        
    )
}