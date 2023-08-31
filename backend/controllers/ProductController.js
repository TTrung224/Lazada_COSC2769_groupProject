const Product = require("../model/Product")
const path = require("path");
const fs = require("fs");

class ProductController {

    async getUserProducts(req, res) {
        try {
            const userId = req.params.userId
            const products = await Product
                .find({ seller : userId})
                .populate('category')
            res.status(200).send(products)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }

    async addProduct(req, res) {
        try {
            if (!req.file) {
                res.sendStatus(500)
            }

            const data = req.body
            const newObject = {}
            newObject.seller = data.productSeller
            newObject.name = data.productName
            newObject.price = data.productPrice
            newObject.description = data.productDesc
            newObject.category = data.productCategory
            newObject.attributes = []

            const attributeVal = JSON.parse(data.attributeValues)
            attributeVal.map(a => {
                if (data[a.name]) {
                    newObject.attributes.push({
                        attribute: a.name,
                        value: data[a.name]
                    })
                }
            })


            await Product.create(newObject, (err, product) => {
                const oldPath = req.file.path
                const imgName = `${product._id.toString()}${path.extname(req.file.originalname)}`
                const newPath = path.join(__dirname, `../productImgs/${imgName}`);
                fs.rename(oldPath, newPath, (err) => {
                    if (err) {
                        console.log(err.message)
                        res.sendStatus(500)
                    }
                })
                product.imgName = imgName
                product.save().then(p => res.status(201).send(product))
            })
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }
}

module.exports = new ProductController();