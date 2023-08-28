const Category = require("../model/Category");

class AccountController {
    async getAllCategories(req, res) {
        try{
            const categories = await Category.find()
            res.status(200).send(categories)
        }catch(err){
            console.log(err)
            res.status(500).send(null)
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
            res.status(500).send(null)
        }
    }

    async addCategory(req, res) {
        try {
            const category = req.body
            await Category.create(category)
            res.status(201).send()
        } catch (err) {
            console.log(err)
            res.status(500).send()
        }
    }

    async updateCategory(req, res) {
        try{
            const {categoryId} = req.params
            const category = req.body
            await Category.findByIdAndUpdate( categoryId, category)
            res.status(201).send()
        }catch (err){
            console.log(err)
            res.status(500).send()
        }
    }

    async deleteCategory(req, res) {
        try{
            const {categoryId} = req.params
            await Category.findByIdAndDelete(categoryId)
            res.status(200).send()
        }catch (err) {
            console.log(err)
            res.status(500).send()
        }
    }
}

module.exports = new AccountController();