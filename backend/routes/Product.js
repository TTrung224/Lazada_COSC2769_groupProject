const express = require('express');
const router = express.Router();
const multer = require('multer');
const ProductController = require('../controllers/ProductController');
const verifyToken = require('../middleware/VerifyToken');


router.get("/:productId", ProductController.getProduct)


router.use(verifyToken)
const upload = multer({dest: "./productImgs/"})
router.get("/seller/:userId", ProductController.getUserProducts)
router.post("/add", upload.single("productImg"), ProductController.addProduct)
router.post("/edit/:productId", upload.single("productImg"),ProductController.editProduct)
router.delete("/delete/:productId", ProductController.deleteProduct)

module.exports = router;