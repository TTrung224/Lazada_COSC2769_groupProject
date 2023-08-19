const items = [
    {
        id: 1, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
        name: 'Shirt', quantity: 1, price: 200
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

export async function getItems(){
    return new Promise((resolve) =>
    {
        setTimeout(() => resolve(items), 1000);
    });
}