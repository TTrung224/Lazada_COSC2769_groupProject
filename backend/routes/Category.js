const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

router.get("/", CategoryController.getAllCategories)
router.get("/:categoryId", CategoryController.getCategoryWithParents)
router.post("/add", CategoryController.addCategory)
router.put("/edit/:categoryId", CategoryController.updateCategory)
router.delete("/delete/:categoryId", CategoryController.deleteCategory)

module.exports = router;