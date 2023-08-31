const Product = require("../model/Product")
const path = require("path");
const fs = require("fs");

class ProductController {

    // NO AUTH
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

    // REQUIRE AUTH
    async getUserProducts(req, res) {
        try {
            const userId = req.params.userId

            if (req.user.userId !== userId) {
                return res.status(401).send("unauthorized request");
            }
            const products = await Product
                .find({ seller: userId })
                .populate('category')
            return res.status(200).send(products)
        } catch (error) {
            console.log(error)
            return res.sendStatus(500)
        }
    }


    async addProduct(req, res) {
        try {
            if (!req.file) {
                return res.status(500).send("Upload image failed")
            }

            const data = req.body

            if (data.productSeller !== req.user.userId) {
                return res.status(401).send("unauthorized request");
            }

            const newObject = {}
            newObject.seller = data.productSeller
            newObject.name = data.productName
            newObject.price = data.productPrice
            newObject.description = data.productDesc
            newObject.category = data.productCategory
            newObject.attributes = JSON.parse(data.productAttributes)


            await Product.create(newObject, (err, product) => {
                if (err) {
                    res.status(500).send("Create product failed")
                } else {
                    const imgName = processImage(req.file, product._id.toString())
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

            if (data.productSeller !== req.user.userId) {
                return res.status(401).send("unauthorized request");
            }

            const productId = req.params.productId

            if (req.file) {
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
            res.status(200).send("Product saved")

        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }

    async deleteProduct(req, res) {
        try {
            const productId = req.params.productId
            const { seller, imgName } = await Product.findById(productId, 'seller imgName')
            if (seller.toString() !== req.user.userId) {
                return res.status(401).send("unauthorized request");
            }

            const imgPath = path.join(__dirname, `../productImgs/${imgName}`)
            
            // Don't delete images, because Order may store a copy of the product, so we
            // still need the image file to display it properly
            await Product.findByIdAndDelete(productId)

            return res.status(200).send("Delete Successful")
        } catch (error) {
            console.log(error)
            return res.sendStatus(500)
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