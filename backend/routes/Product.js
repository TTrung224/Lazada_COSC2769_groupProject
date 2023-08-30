const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const multer = require('multer');
const ProductController = require('../controllers/ProductController');

const upload = multer({dest: "./productImgs/"})
router.post("/add", upload.single("img"), ProductController.addProduct)

module.exports = router;