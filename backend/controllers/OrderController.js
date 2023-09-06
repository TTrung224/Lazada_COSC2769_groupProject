const Order = require("../model/Order")

class OrderController {

    async createOrder(req, res) {
        try {
            const user = req.user
            const cart = req.body
            if(cart.isEmpty){
                return res.status(400).send("Empty cart")
            }
            const data = { customer: user.userId, order: [] }
            data.order = cart.map(item => {
                return {...item, status: "New"}
            })
            
            await Order.create(data)
            return res.status(201).send("Order created")
        } catch (error) {
            console.log(error)
            return res.status(500).send(error.message)
        }
    }

    async getCustomerOrder(req, res) {
        try {
            const user = req.user
            const data = await Order.find({customer: user.userId}).populate("order.product.seller", "fullName")
            return res.status(200).send(data)
        } catch (error) {
            console.log(error)
            return res.status(500).send(error.message)
        }
    }
}


module.exports = new OrderController();