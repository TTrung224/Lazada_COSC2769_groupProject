import React, {useContext, useEffect, useState} from 'react';
import '../componentStyle.css';
import Loader from '../Shared/loader';
import { getItems } from './cartItemsApi';
import { useLoaderData } from 'react-router-dom';
import OrderItem from './orderItem';


export async function loadItems(){
    const orderList = await getItems();

    return orderList
}

export default function Order(){
    const orderList = useLoaderData()

    const [isLoading, setIsLoading] = useState(false)


    return(
        <div class = "container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class = "col">
                    <div class ="card">
                        
                        <div class ="card-body">
                            <div class = "row">
                                <div class = "col">
                                        <h2>My Orders</h2>
                                        <hr></hr>
                                    
                                    

                                    {(isLoading) ? <Loader/> : <></>}
                                    {orderList.map(product => <OrderItem key={product.id} product={product} />)}

                                    
                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
       
    
    )
}