import React, {useState} from 'react';

const CountQuantity = () => {
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        setQuantity(quantity + 1);
    }

    const decrease = () => {
        if(quantity >= 1){
            setQuantity(quantity - 1);
        }

        else {
            setQuantity(0)
        }
        
    }

    

    return(
        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
            
            <button class="btn btn-secondary" onClick={() => decrease()}> - </button>
            
            

        <input id="form1" min="0" name="quantity" defaultValue= {quantity} type="number"
            class="form-control form-control-sm" />

           
            

            <button class="btn btn-secondary px-2  " onClick={() => increase()}> + </button>
        </div>
    )
 }

 export default CountQuantity;