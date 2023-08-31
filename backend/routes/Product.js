const express = require('express');
const router = express.Router();
const multer = require('multer');
const ProductController = require('../controllers/ProductController');

router.get("/:userId", ProductController.getUserProducts)

const upload = multer({dest: "./productImgs/"})
router.post("/add", upload.single("productImg"), ProductController.addProduct)

module.exports = router;