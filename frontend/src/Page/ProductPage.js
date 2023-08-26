import { useParams } from "react-router-dom";
import Navbar from "../Component/Shared/navbar";
import CountQuantity from "../Component/Customer/countQuantity";
import { useState } from "react";

var productList = [
    {
        id: 1, name: "fppple", img: "https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180", description: "eifjghsfuighuifghfdffgrgergwerg", price: 7000000, category: "Fruit", addedDate: "12/08/2023"
    },
    {
        id: 2, name: "cppple", img: "https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180", description: "eifjghsfuighuifghfdffgrgergwerg", price: 8000000, category: "Fruit", addedDate: "12/08/2023"
    },
    {
        id: 3, name: "dppple", img: "https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180", description: "eifjghsfuighuifghfdffgrgergwerg", price: 5000000, category: "Fruit", addedDate: "12/08/2023"
    },
    {
        id: 4, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
        name: 'Shirt', price: 200, category: "Clothes", addedDate: "12/08/2023"
    },
    {
        id: 5, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
        name: 'Shirt', quantity: 1, price: 200, category: "Clothes", addedDate: "12/08/2023"
    },
    {
        id: 6, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
        name: 'Shirt', quantity: 100, price: 200, category: "Clothes", addedDate: "12/08/2023"
    },
    {
        id: 7, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
        name: 'Pants', quantity: 100, price: 200000
    },

]


function loadProduct(id) {
    return productList.find(p => p.id === id)
}

function handleAddToCart(product, quantity){
    let cart = []
    let alreadyAdded =false
    if(localStorage.cart){
        cart = JSON.parse(localStorage.cart)
    }
    cart = cart.map(item => {
        if(item.product.id === product.id){
            alreadyAdded = true
            item.quantity = quantity
        }
        return item
    })

    if(!alreadyAdded){
        cart.push({product: product, quantity: quantity})
    }

    localStorage.setItem("cart", JSON.stringify(cart))
}

const ProductPage = () => {
    const { productId } = useParams()
    const [quantity, setQuantity] = useState(1)
    const product = loadProduct(parseInt(productId))

    return (
        <>
            <Navbar />
            <div id={`id${productId}`} className="container">
                <div className="row mt-5 p-3 shadow">
                    <div className="col-lg-3 col-12 border align-self-center p-3">
                        <img className="product-image img-fluid mx-auto d-block" src={product.img} alt="product" />
                    </div>

                    <div className="col-lg-9">
                        <h2>{product.name}</h2>
                        <hr />

                        <h3 className="text-primary">{product.price} VND</h3>


                        <div className="d-inline-flex mt-2">
                            <p className="text-sm-start text-secondary my-auto me-3">Category:</p>
                            <p className="text-sm-start my-auto">{product.category}</p>
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
                </div>
            </div>
        </>
    );
}

export default ProductPage;