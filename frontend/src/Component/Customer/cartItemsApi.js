import { useState } from "react";

export async function getItems() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(items), 1000);
    });
}

const items = [
    {
        product: {
            id: 1, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
            name: 'Shirt', price: 200
        },
        quantity: 1
    },
    {
        product: {
            id: 2, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
            name: 'Shirt', price: 200
        },
        quantity: 2
    },
    {
        product: {
            id: 3, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
        name: 'Shirt', price: 200
        },
        quantity: 100
    },
    {
        product: {
            id: 4, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
            name: 'Pants', price: 200000
        }, 
        quantity: 100
    }
]



