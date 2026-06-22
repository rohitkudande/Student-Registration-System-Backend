const Student = require('../models/Student');


const getAllStudents = async (req, res) => {
  try {

    const students = await Student.findAll({
      order: [['createdAt', 'DESC']]
    });
    
    res.json({
      count: students.length,
      students
    });
  } catch (error) {
    console.error('Get students error:', error);
    res.status(500).json({ 
      error: 'Server error fetching students' 
    });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    
    if (!student) {
      return res.status(404).json({ 
        error: 'Student not found' 
      });
    }

    res.json({ student });
  } catch (error) {
    console.error('Get student error:', error);
    res.status(500).json({ 
      error: 'Server error fetching student' 
    });
  }
};

const createStudent = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, course, status } = req.body;

    const existingStudent = await Student.findOne({ 
      where: { email } 
    });
    
    if (existingStudent) {
      return res.status(400).json({ 
        error: 'Student with this email already exists' 
      });
    }

    const student = await Student.create({
      firstName,
      lastName,
      email,
      phone,
      course,
      status: status || 'active'
    });

    res.status(201).json({
      message: 'Student created successfully',
      student
    });
  } catch (error) {
    console.error('Create student error:', error);
    res.status(500).json({ 
      error: 'Server error creating student' 
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    
    if (!student) {
      return res.status(404).json({ 
        error: 'Student not found' 
      });
    }

    if (req.body.email && req.body.email !== student.email) {
      const existingStudent = await Student.findOne({ 
        where: { email: req.body.email } 
      });
      if (existingStudent) {
        return res.status(400).json({ 
          error: 'Email already in use by another student' 
        });
      }
    }

    await student.update(req.body);

    res.json({
      message: 'Student updated successfully',
      student
    });
  } catch (error) {
    console.error('Update student error:', error);
    res.status(500).json({ 
      error: 'Server error updating student' 
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    
    if (!student) {
      return res.status(404).json({ 
        error: 'Student not found' 
      });
    }

    await student.destroy();

    res.json({ 
      message: 'Student deleted successfully' 
    });
  } catch (error) {
    console.error('Delete student error:', error);
    res.status(500).json({ 
      error: 'Server error deleting student' 
    });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};