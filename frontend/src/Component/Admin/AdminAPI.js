const test = [
    { id: 0, name: 'Electronic Devices', attributes: [], parent: -1 },
    { id: 1, name: 'Home Appliances', attributes: [], parent: -1 },
    { id: 2, name: 'Groceries and Snack', attributes: [], parent: -1 },
    { id: 3, name: 'Computer', attributes: [{ name: 'Model', type: 'text', required: true }], parent: 0 },
    { id: 4, name: 'Laptop', attributes: [], parent: 0 },
    { id: 5, name: 'Kitchen', attributes: [], parent: 1 },
    { id: 6, name: 'Living Room', attributes: [], parent: 1 },
    { id: 7, name: 'Sweet', attributes: [], parent: 2 },
    { id: 8, name: 'Gaming', attributes: [], parent: 3 },
    { id: 9, name: '3D Modelling', attributes: [], parent: 3 }
]

export async function getCategories() {
    return new Promise(resolve => {
        setTimeout(() => resolve(test), 1000)
    })
}

export async function getCategory(id) {
    const item = test.find(c => c.id === id)
    return new Promise(resolve => {
        setTimeout(() => resolve(item), 500)
    })
}

export async function addCategory(name, attributes, parent) {
    return new Promise(resolve => {
        setTimeout(() => {
            test.push({ id: test.length, name: name, attributes: attributes, parent: parent })
            resolve(true)
        }, 1000)
    })
}

export async function updateCategory(id, category) {
    return new Promise(resolve => {
        setTimeout(() => {
            const newCat = {id: id, ...category}
            for (let i = 0; i < test.length; i++) {
                if (test[i].id === id) {
                    test.splice(i, 1, newCat)
                    resolve(newCat)
                }
            }
            resolve(null)
        }, 1000)
    })
}