import React, { useEffect, useState } from 'react';
import '../componentStyle.css';
import Loader from '../Shared/loader';
import OrderItem from './OrderItem'
import { getCustomerOrder } from '../../Service/OrderAPI';
import { numberFormat } from '../../Context/constants';


export async function loadItems() {
    const res = await getCustomerOrder()
    return res
}

export default function Order() {
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    function handleChangeStatus(id, status) {
        const newOrders = orders.map((o) => {
            if (o.order.product._id === id) {
                o.order.status = status
            }
            return o
        })
        setOrders(newOrders)
    }


    useEffect(() => {
        loadItems().then(res => {
            if (res && res.status === 200) {
                setOrders(res.data)
            }
        }).finally(setIsLoading(false))
    }, [])

    return (
        <div class="container py-5">
            {(isLoading) ? <Loader /> : <></>}
            <div class="card">
                <div class="card-body">
                    <h2>My Orders</h2>
                    <hr className='mb-5'></hr>
                    {orders.map(ord => {
                        let totalPrice = 0
                        return (
                            <div className="card my-3">
                                <div className="card-body">
                                    <div className="table-responsive" key={ord._id}>
                                        <h3>Order {ord._id.slice(-10)}</h3>
                                        <table className="table text-center">
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Seller</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ord.order.map(item => {
                                                    totalPrice += item.product.price * item.quantity
                                                    return <OrderItem key={item.product._id} item={item} handleChangeStatus={handleChangeStatus} />
                                                })}
                                            </tbody>
                                        </table>

                                        <h5 className='text-end mt-4 mx-5'>Total Price: {numberFormat(totalPrice)} VND</h5>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}