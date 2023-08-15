const test = [
    { id: 0, name: 'Electronic Devices', parent: -1 },
    { id: 1, name: 'Home Appliances', parent: -1 },
    { id: 2, name: 'Groceries and Snack', parent: -1 },
    { id: 3, name: 'Computer', parent: 0 },
    { id: 4, name: 'Laptop', parent: 0 },
    { id: 5, name: 'Kitchen', parent: 1 },
    { id: 6, name: 'Living Room', parent: 1 },
    { id: 7, name: 'Sweet', parent: 2 },
    { id: 8, name: 'Gaming', parent: 3 },
    { id: 9, name: '3D Modelling', parent: 3 }
]

export async function getCategories() {
    return new Promise(resolve => {
        setTimeout(() => resolve(test), 1000)
    })
}

export async function getCategory(id){
    const item = test.find(c => c.id === id)
    return new Promise(resolve => {
        setTimeout(() => resolve(item), 1000)
    })
}

export async function addCategory(name){
    return new Promise(resolve => {
        setTimeout(()=> {
            test.push({id: test.length, name: name, parent: -1})
            resolve(true)
        }, 1000)
    })
    
}