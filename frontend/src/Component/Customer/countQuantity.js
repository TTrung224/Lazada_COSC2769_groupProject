import React, { useState } from 'react';

const CountQuantity = ({ quantity, increaseQuant, decreaseQuant, changeQuant }) => {

    

    return (
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
            <div className="input-group">
                <button className="btn btn-secondary" type='button' onClick={() => decreaseQuant()}> - </button>
                <input key={"quantity"} id="quantity" min="0" name="quantity" value={quantity} type="number"
                    className="form-control input-number form-control-sm" onChange={() => changeQuant()} />
                <button className="btn btn-secondary" type='button' onClick={() => increaseQuant()}> + </button>
            </div>
        </div>
    )
}

export default CountQuantity;