import React, {useState} from 'react';
import CountQuantity from './countQuantity';
import DeleteProduct from './removeProduct';

const cartItem = ({product}) => {
    return ( 
        <div class="row mb-4 d-flex justify-content-between align-items-center">
        <div class="col-md-2 col-lg-2 col-xl-2">
        <img
            src={product.img}
            class="img-fluid rounded-3" style ={{width:"100px"}}/>
        </div>
        
        <div class="col-md-3 col-lg-3 col-xl-3">
        <h6 class="text-black mb-0">{product.name}</h6>
        </div>
        
        <CountQuantity></CountQuantity>

        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h6 class="mb-0">${product.price}</h6>
            
        </div>

        <DeleteProduct></DeleteProduct>
        
    </div>
     );

}



 
export default cartItem;