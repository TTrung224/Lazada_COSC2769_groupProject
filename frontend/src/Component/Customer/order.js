import React, { useState } from 'react';
import '../componentStyle.css';
import Loader from '../Shared/loader';
import OrderItem from './orderItem';


export async function loadItems() {
    return []
}

export default function Order() {
    const orderList = []

    const [isLoading, setIsLoading] = useState(false)


    return (
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                    <div class="card">

                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <h2>My Orders</h2>
                                    <hr></hr>



                                    {(isLoading) ? <Loader /> : <></>}
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