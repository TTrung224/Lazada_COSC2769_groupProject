const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/VerifyToken');
const userAuth = require('../middleware/UserAuth');
const OrderController = require('../controllers/OrderController');

router.use(verifyToken)
router.use(userAuth)

router.get("/", OrderController.getCustomerOrder)
router.post("/create", OrderController.createOrder)
router.patch("/:orderId/:productId", OrderController.changeOrderStatus)

module.exports = router;