const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./utils/swagger');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();


app.use(cors());


app.use(express.json());


app.use(express.urlencoded({ extended: true }));


app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/auth', authRoutes);

app.use('/api/students', studentRoutes);


app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});


app.get('/', (req, res) => {
  res.json({
    message: 'Student Registration System API',
    version: '1.0.0',
    documentation: '/api/docs',
    endpoints: {
      auth: '/api/auth',
      students: '/api/students'
    }
  });
});


app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route not found' 
  });
});

app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ 
    error: 'Something went wrong! Please try again later.' 
  });
});

module.exports = app;