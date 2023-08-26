import React, { useState } from 'react';

const CountQuantity = ({ quantity, setQuantity, productId }) => {

    const changeQuant = () => {
        let newQuant = parseInt(document.querySelector(`#id${productId} #quantity`).value)
        if(newQuant < 1){
            newQuant = 1
        }
        setQuantity(newQuant)
    }

    const increaseQuant = () => {
        const newQuant = quantity + 1
        setQuantity(newQuant);
    }

    const decreaseQuant = () => {
        if (quantity > 1) {
            const newQuant = quantity - 1
            setQuantity(newQuant);
        }

        else {
            setQuantity(1)
        }
    }

    return (
        <div className="input-group">
            <button className="btn btn-secondary" type='button' onClick={() => decreaseQuant()}> - </button>
            <input key={"quantity"} id="quantity" min="1" name="quantity" value={quantity} type="number"
                className="form-control input-number form-control-sm" onChange={() => changeQuant()} />
            <button className="btn btn-secondary" type='button' onClick={() => increaseQuant()}> + </button>
        </div>

    )
}

export default CountQuantity;