const Category = require("../model/Category");

class CategoryController {
    async getAllCategories(req, res) {
        try{
            const categories = await Category.find()
            res.status(200).send(categories)
        }catch(err){
            console.log(err)
            res.sendStatus(500)
        }
    }

    async getCategoryWithParents(req, res) {
        try{
            let {categoryId} = req.params
            let category = []
            while (categoryId !== null) {
                const data = await Category.findById(categoryId)
                category.push(data)
                categoryId = data.parentCategoryId
            }
            res.status(200).send(category)
        }catch(err){
            console.log(err)
            res.sendStatus(500)
        }
    }

    async addCategory(req, res) {
        try {
            const category = req.body
            await Category.create(category)
            res.sendStatus(201)
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    }

    async updateCategory(req, res) {
        try{
            const {categoryId} = req.params
            const category = req.body
            await Category.findByIdAndUpdate( categoryId, category)
            res.sendStatus(201)
        }catch (err){
            console.log(err)
            res.sendStatus(500)
        }
    }

    async deleteCategory(req, res) {
        try{
            const {categoryId} = req.params
            await Category.findByIdAndDelete(categoryId)
            res.sendStatus(200)
        }catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    }
}

module.exports = new CategoryController();