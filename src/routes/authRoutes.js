const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controllers/authController');
const { auth } = require('../middleware/auth');
const { 
  registerValidation, 
  loginValidation, 
  validate 
} = require('../middleware/validation');


router.post('/register', registerValidation, validate, register);

router.post('/login', loginValidation, validate, login);

router.get('/me', auth, getMe);

module.exports = router;