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
        
        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
        <button class="btn btn-secondary"
            onclick="">
            -
        </button>

        <input id="form1" min="0" name="quantity" defaultValue= {product.quantity} type="number"
            class="form-control form-control-sm" />

        <button class="btn btn-secondary px-2"
            onclick="">
            +
        </button>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h6 class="mb-0">${product.price}</h6>
        </div>

        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
            <button type ="button" class ="btn">X</button>
        </div>
    </div>
     );
}
 
export default cartItem;