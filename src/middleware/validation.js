const { body, validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      errors: errors.array().map(err => err.msg) 
    });
  }
  next();
};

const registerValidation = [
  body('username')
    .isLength({ min: 3 }).withMessage('Username must be at least 3 characters')
    .isLength({ max: 30 }).withMessage('Username must be less than 30 characters'),
  
  body('email')
    .isEmail().withMessage('Please provide a valid email address'),
  
  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];

const loginValidation = [
  body('email')
    .isEmail().withMessage('Please provide a valid email address'),
  
  body('password')
    .notEmpty().withMessage('Password is required')
];

const studentValidation = [
  body('firstName')
    .notEmpty().withMessage('First name is required')
    .isLength({ min: 2 }).withMessage('First name must be at least 2 characters'),
  
  body('lastName')
    .notEmpty().withMessage('Last name is required')
    .isLength({ min: 2 }).withMessage('Last name must be at least 2 characters'),
  
  body('email')
    .isEmail().withMessage('Please provide a valid email address'),
  
  body('phone')
    .notEmpty().withMessage('Phone number is required')
    .isLength({ min: 10, max: 15 }).withMessage('Phone must be 10-15 digits'),
  
  body('course')
    .notEmpty().withMessage('Course is required')
];

module.exports = { 
  validate, 
  registerValidation, 
  loginValidation, 
  studentValidation 
};