import React, { useState } from 'react';
import CountQuantity from './countQuantity';
// import DeleteProduct from './removeProduct';

const CartItem = ({ item, deleteProduct }) => {

    const [quantity, setQuantity] = useState(item.quantity);
    
    const product = item.product

    return (
        <div id={`id${product.id}`} className="row mb-4 d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
                <img
                    src={product.img}
                    className="img-fluid rounded-3" style={{ width: "100px" }} />
            </div>

            <div className="col-md-3 col-lg-3 col-xl-3">
                <h6 className="text-black mb-0">{product.name}</h6>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <CountQuantity quantity={quantity} setQuantity={setQuantity} productId={product.id}></CountQuantity>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h6 className="mb-0">{product.price} VND</h6>

            </div>

            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <button type="button" class="btn" onClick={() => deleteProduct(product.id)}>X</button>
            </div>

        </div>
    );

}
export default CartItem;