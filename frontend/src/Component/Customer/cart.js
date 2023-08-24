import React, {useContext, useEffect, useState} from 'react';
import '../componentStyle.css';
import Loader from '../Shared/loader';
import { getItems } from './cartItemsApi';
import { useLoaderData } from 'react-router-dom';
import CartItem from './cartItem';


export async function loadItems(){
    const cartList = await getItems();

    return cartList
}

export default function Cart(){
    const cartList = useLoaderData()

    const [isLoading, setIsLoading] = useState(false)

    const deleteProduct = id => {
        
    }

    // const { authState: {isAuthenticated}} = useContext(AuthContext)
    // const navigate = useNavigate()

    // useEffect(() => {
    //     const path = handleAuth(isAuthenticated);
    //     if(path!=null) navigate(path)
    // });

    

    

    return(
        <div class = "container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class = "col">
                    <div class ="card">
                        
                        <div class ="card-body">
                            <div class = "row">
                                <div class = "col">
                                        <h2>Shopping Cart</h2>
                                        <hr></hr>
                                    
                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                            <button type="button" class = "btn btn-primary" action="selectAll">Select All</button> 
                                            <button type="button" class = "btn btn-danger" action="deleteAll">Delete All</button>
                                    </div>

                                    <hr></hr>

                                    {(isLoading) ? <Loader/> : <></>}
                                    {cartList.map(product => <CartItem key={product.id} product={product} />)}

                                    
                    

                                </div>
                                <div class = "col-lg-4" >
                                    <div class = "p-5">
                                        <h3>Location</h3>
                                        <p>Customer Address</p>

                                        <hr></hr>

                                        <h5>Order Summary</h5>

                                        <div class = "d-flex justify-content-between">
                                            <p>Subtotal</p>
                                            <p>50.000.000 VND</p>
                                        </div>

                                        <div class = "d-flex justify-content-between">
                                            <p>Shipping Fee</p>
                                            <p>200.000 VND</p>
                                        </div>

                                        <div class = "d-flex justify-content-between">
                                            <p>Total</p>
                                            <p>50.200.000 VND</p>
                                        </div>

                                        <div class = "d-flex justify-content-between">
                                            <button type = "button" class = "btn btn-success btn-block btn-lg ">Confirm Order</button>
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