const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/VerifyToken');
const accountController = require('../controllers/AccountController');
const adminAuth = require('../middleware/AdminAuth');
// const technician_auth = require('../middleware/technician_auth')

router.post('/login', accountController.login);
router.post('/signup', accountController.register);
router.post('/logout',verifyToken, accountController.logout);
router.get('/seller-request',verifyToken, adminAuth, accountController.getAllSellerRequest);
router.put('/seller-request/:sellerId',verifyToken, adminAuth, accountController.updateSellerRequestStatus);
router.get('/', verifyToken, accountController.getUser);

module.exports = router;