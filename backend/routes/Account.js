const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/VerifyToken')
const accountController = require('../controllers/AccountController');
// const technician_auth = require('../middleware/technician_auth')

router.post('/login', accountController.login);
router.post('/signup', accountController.register);

module.exports = router;