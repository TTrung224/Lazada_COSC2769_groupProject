const Product = require("../model/Product")
const path = require("path");
const fs = require("fs");

class ProductController {

    // NO AUTH
    async getAllProducts(req, res) {
        try {
            const limit = 12
            var pageNo = 1
            var skip = (pageNo - 1) * (limit)

            // Query products
            let query = {}
            console.log('req')
            console.log(req.query)
            if(req.query?.page){
                pageNo = req.query.page
            }
            if(req.query?.category !== "null"){
                query.category = req.query.category
            }
            if(req.query?.search !== ""){
                query.$or = [
                    {name: new RegExp(req.query.search, 'gisu')},
                    {description: new RegExp(req.query.search, 'gisu')}
                ]
            }
            if(req.query?.minPrice !== "" && req.query.maxPrice !== ""){
                query.price = { $gte: req.query.minPrice, $lte: req.query.maxPrice}
            }else if (req.query?.minPrice !== ""){
                query.price = { $gte: req.query.minPrice }
            } else if(req.query?.maxPrice !== ""){
                query.price = { $lte: req.query.maxPrice }
            }
            if(req.query?.minDate !== "" && req.query.maxDate !== ""){
                query.createdAt = { $gte: req.query.minDate, $lte: req.query.maxDate}
            }else if (req.query?.minDate !== ""){
                query.createdAt = { $gte: req.query.minDate }
            } else if(req.query?.minDate !== ""){
                query.createdAt = { $lte: req.query.maxDate }
            }
            console.log('query')
            console.log(query)
            let products
            let attributeList = {}
            if(Object.keys(query).length){
                products = await Product.find(query).skip(skip).limit(limit).populate('category')

                //Get and group products' attribute
                products.forEach(item => {
                    if(item?.attributes){
                        item.attributes.forEach(attribute => {
                            if(Object.keys(attributeList).includes(attribute?.attribute?.name)){
                                attributeList[attribute?.attribute?.name].push(attribute?.value)
                            }else{
                                attributeList[attribute?.attribute?.name] = [attribute?.value]
                            }
                        })
                    }
                })
                console.log("attributes")
                console.log(attributeList)
            }else{
                products = await Product.find().skip(skip).limit(limit).populate('category')
            }

            const count = await Product.count()
            return res.status(200).send({products: products, count: count, attributes: attributeList})
        } catch (error) {
            console.log(error)
            return res.sendStatus(500)
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

    // REQUIRE AUTH
    async getUserProducts(req, res) {
        try {
            const userId = req.params.userId

            if (req.user.userId !== userId) {
                return res.status(401).send("Unauthorized Request");
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
                return res.status(401).send("Unauthorized Request");
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
                return res.status(401).send("Unauthorized Request");
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