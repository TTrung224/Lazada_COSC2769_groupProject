const express = require('express');
const router = express.Router();
const multer = require('multer');
const ProductController = require('../controllers/ProductController');

router.get("/seller/:userId", ProductController.getUserProducts)
router.get("/:productId", ProductController.getProduct)


const upload = multer({dest: "./productImgs/"})
router.post("/add", upload.single("productImg"), ProductController.addProduct)
router.post("/edit/:productId", upload.single("productImg"),ProductController.editProduct)

module.exports = router;