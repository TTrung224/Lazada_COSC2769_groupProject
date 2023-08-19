const items = [
    {
        id: 1, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
        name: 'Shirt', quantity: 1, status:'new'
    },
    {
        id: 2, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
        name: 'Shirt', quantity: 1, status:'new'
    },
    {
        id: 3, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
        name: 'Shirt', quantity: 100, status:'delivered'
    },
    {
        id: 4, img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
        name: 'Pants', quantity: 100, status:'on-deliver'
    },
]

export async function getItems(){
    return new Promise((resolve) =>
    {
        setTimeout(() => resolve(items), 1000);
    });
}