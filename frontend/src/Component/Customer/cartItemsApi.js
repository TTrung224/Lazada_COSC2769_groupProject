import { useState } from "react";

export async function getItems(){
    return new Promise((resolve) =>
    {
        setTimeout(() => resolve(items), 1000);
    });
}

const items = [
    {
        id: 1, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
        name: 'Shirt', price: 200
    },
    {
        id: 2, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
        name: 'Shirt', quantity: 1, price: 200
    },
    {
        id: 3, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
        name: 'Shirt', quantity: 100, price: 200
    },
    {
        id: 4, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
        name: 'Pants', quantity: 100, price: 200000
    },
]

function DeleteProduct(){
    
    
    const[products, setProducts] = useState(items)
    
    const DeleteProduct = id => {
        setProducts(products => {
            return products.filter(product => product.id !== id)
        })
    
        return(
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <button type ="button" class ="btn" onClick={() => DeleteProduct(products.id)}>X</button>
            </div>
        )
    }

    const DeleteAllProducts = () => {
        products.splice(0,products.length);
        setProducts([...products]);
    }
}

export default DeleteProduct;


