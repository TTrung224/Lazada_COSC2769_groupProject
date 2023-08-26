import React, { useState } from 'react';
import '../componentStyle.css';
import Loader from '../Shared/loader';
import { getItems } from './cartItemsApi';
import { useLoaderData } from 'react-router-dom';
import CartItem from './cartItem';


export async function loadItems(){
    // const cartList = await getItems();
    const ls = localStorage.cart
    if(ls){
        const cartList = JSON.parse(localStorage.cart)
        return cartList
    }
    return []
}

export default function Cart(){
    const cartList = useLoaderData()
    const [cart, setCart] = useState(cartList)

    function deleteProduct(id) {
        setCart(cart => {
            return cart.filter(item => item.product.id !== id)
        })
    }

    const [isLoading, setIsLoading] = useState(false)

    return(
        <div className = "container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className = "col">
                    <div className ="card">
                        
                        <div className ="card-body">
                            <div className = "row">
                                <div className = "col">
                                        <h2>Shopping Cart</h2>
                                        <hr></hr>
                                    
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                            <button type="button" className = "btn btn-primary" action="selectAll">Select All</button> 
                                            <button type="button" className = "btn btn-danger" action="deleteAll">Delete All</button>
                                    </div>

                                    <hr></hr>

                                    {(isLoading) ? <Loader/> : <></>}
                                    {cart.map(item => <CartItem key={item.product.id} item={item} deleteProduct={deleteProduct}/>)}

                                </div>
                                <div className = "col-lg-4" >
                                    <div className = "p-5">
                                        <h3>Location</h3>
                                        <p>Customer Address</p>

                                        <hr></hr>

                                        <h5>Order Summary</h5>

                                        <div className = "d-flex justify-content-between">
                                            <p>Subtotal</p>
                                            <p>50.000.000 VND</p>
                                        </div>

                                        <div className = "d-flex justify-content-between">
                                            <p>Shipping Fee</p>
                                            <p>200.000 VND</p>
                                        </div>

                                        <div className = "d-flex justify-content-between">
                                            <p>Total</p>
                                            <p>50.200.000 VND</p>
                                        </div>

                                        <div className = "d-flex justify-content-between">
                                            <button type = "button" className = "btn btn-success btn-block btn-lg ">Confirm Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
       
    
    )
}