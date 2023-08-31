const Product = require("../model/Product")
const path = require("path");
const fs = require("fs");

class ProductController {

    async getUserProducts(req, res) {
        try {
            const userId = req.params.userId
            const products = await Product
                .find({ seller: userId })
                .populate('category')
            res.status(200).send(products)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }

    async getProduct(req, res) {
        try {
            const productId = req.params.productId
            const product = await Product
                .findById(productId)
                .populate('category')
            res.status(200).send(product)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }


    async addProduct(req, res) {
        try {
            if (!req.file) {
                res.status(500).send("Upload image failed")
            }

            const data = req.body
            const newObject = {}
            newObject.seller = data.productSeller
            newObject.name = data.productName
            newObject.price = data.productPrice
            newObject.description = data.productDesc
            newObject.category = data.productCategory
            newObject.attributes = JSON.parse(data.productAttributes)


            await Product.create(newObject, (err, product) => {
                const imgName = processImage(req.file, product._id.toString())
                if (imgName === null) {
                    product.imgName = "placeholder.png"
                    res.status(500).send("Upload image failed")
                } else {
                    product.imgName = imgName
                    product.save().then(p => res.status(201).send(product))
                }
            })
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }


    async editProduct(req, res) {
        try {
            
            const newObject = {}
            const data = req.body
            const productId = req.params.productId

            if(req.file){
                const imgName = processImage(req.file, productId)
                if (imgName === null) {
                    res.status(500).send("Upload image failed")
                } else {
                    newObject.imgName = imgName
                }
            }

            newObject.name = data.productName
            newObject.price = data.productPrice
            newObject.description = data.productDesc
            newObject.attributes = JSON.parse(data.productAttributes)

            await Product.findByIdAndUpdate(productId, newObject)
            res.sendStatus(200)
            
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }
}

function processImage(file, productId) {
    const oldPath = file.path
    const imgName = `${productId}${path.extname(file.originalname)}`
    const newPath = path.join(__dirname, `../productImgs/${imgName}`);

    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            console.log(err.message)
            return "placeholder.png"
        }
    })

    return imgName
}

module.exports = new ProductController();