import { useParams } from "react-router-dom";
import Navbar from "../Component/Shared/navbar";
import CountQuantity from "../Component/Customer/countQuantity";
import { useEffect, useState } from "react";
import { getProduct } from "../Service/ProductAPI";
import { backendUrl } from "../Context/constants";
import Loader from "../Component/Shared/loader";


function loadProduct(id) {
    const res = getProduct(id)
    return res
}

function handleAddToCart(product, quantity) {
    let cart = []
    let alreadyAdded = false
    if (localStorage.cart) {
        cart = JSON.parse(localStorage.cart)
    }
    cart = cart.map(item => {
        if (item.product.id === product.id) {
            alreadyAdded = true
            item.quantity = quantity
        }
        return item
    })

    if (!alreadyAdded) {
        cart.push({ product: product, quantity: quantity })
    }

    localStorage.setItem("cart", JSON.stringify(cart))
}

const ProductPage = () => {
    const { productId } = useParams()
    const [quantity, setQuantity] = useState(1)
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadProduct(productId).then(res => {
            if (res) {
                if (res.status === 200) {
                    setProduct(res.data)
                }
            }
        }).finally(() => {setIsLoading(false)})
    }, [])

    return (
        <>
            <Navbar />
            {isLoading ? <Loader /> : <></>}
            {product !== null ?
                <div className="container">
                    <div className="row mt-5 p-3 shadow">
                        <div className="col-lg-3 col-12 border align-self-center p-3">
                            <img className="product-image img-fluid mx-auto d-block" src={backendUrl + `/image/${product.imgName}`} alt="product" />
                        </div>

                        <div className="col-lg-9">
                            <h2>{product.name}</h2>
                            <hr />

                            <h3 className="text-primary">{product.price} VND</h3>


                            <div className="d-inline-flex mt-2">
                                <p className="text-sm-start text-secondary my-auto me-3">Category:</p>
                                <p className="text-sm-start my-auto">{product.category.name}</p>
                            </div>
                            <br />
                            <div className="d-inline-flex mt-3">
                                <p className="text-sm-start text-secondary my-auto me-3">Quantity:</p>
                                <CountQuantity quantity={quantity} setQuantity={setQuantity} productId={productId} />
                            </div>


                            <div className="mt-3">
                                <button type="button" className="btn btn-lg btn-primary me-3">Buy Now</button>
                                <button type="button" className="btn btn-lg btn-outline-primary" onClick={() => handleAddToCart(product, quantity)}>Add To Cart</button>
                            </div>

                        </div>
                        <div className="mt-5">
                            <ul className="list-group">
                                {product.attributes.map(a => {
                                    return (
                                        <li className="list-group-item">
                                            <h5 class="mb-1">{a.attribute.name}</h5>
                                            <small class="text-body-secondary">{a.value}</small>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="container my-4">
                                <h3 className="">Description:</h3>
                                <p style={{whiteSpace:"pre-wrap"}}>{product.description}</p>
                            </div>
                        </div>
                    </div>

                </div> : <></>
            }
        </>
    );
}

export default ProductPage;