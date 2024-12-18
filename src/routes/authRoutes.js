const express = require ('express');
const router = express.Router();
const { registerUser, loginUser } = require('.../controller/authControllers');

router.post('register', registerUser);
router.post('login', loginUser);

module.export = router;