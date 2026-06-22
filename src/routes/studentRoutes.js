const express = require('express');
const router = express.Router();
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');
const { auth, authorize } = require('../middleware/auth');
const { studentValidation, validate } = require('../middleware/validation');


router.get('/', auth, getAllStudents);


router.get('/:id', auth, getStudentById);

router.post('/', 
  auth, 
  authorize('admin', 'teacher'), 
  studentValidation, 
  validate, 
  createStudent
);

router.put('/:id', 
  auth, 
  authorize('admin', 'teacher'), 
  studentValidation, 
  validate, 
  updateStudent
);


router.delete('/:id', 
  auth, 
  authorize('admin'), 
  deleteStudent
);

module.exports = router;