import React, { useState } from 'react';
import CountQuantity from './countQuantity';
// import DeleteProduct from './removeProduct';

const CartItem = ({ product }) => {

    const [quantity, setQuantity] = useState(1);

    const changeQuant = () => {
        const newQuant = parseInt(document.querySelector(`#id${product.id} #quantity`).value)
        setQuantity(newQuant)
    }

    const increaseQuant = () => {
        const newQuant = quantity + 1
        setQuantity(newQuant);
    }

    const decreaseQuant = () => {
        if (quantity >= 1) {
            const newQuant = quantity - 1
            setQuantity(newQuant);
        }

        else {
            setQuantity(0)
        }
    }


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

            <CountQuantity quantity={quantity} increaseQuant={increaseQuant} decreaseQuant={decreaseQuant} changeQuant={changeQuant}></CountQuantity>

            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h6 className="mb-0">${product.price}</h6>

            </div>

            {/* <DeleteProduct></DeleteProduct> */}

        </div>
    );

}
export default CartItem;