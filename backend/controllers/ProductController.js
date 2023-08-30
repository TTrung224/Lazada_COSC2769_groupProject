const Product = require("../model/Product")

class ProductController {
    async addProduct(req, res) {
        try {
            if(!req.file.path){
                res.sendStatus(500)
            }

            const curPhotoPath = req.file.path
            // const product = req.body
            // await Product.create(product)
           
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }
}

module.exports = new ProductController();