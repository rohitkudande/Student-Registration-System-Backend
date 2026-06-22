const app = require('./src/app');
const { connectDB } = require('./src/config/db');

const PORT = process.env.PORT || 3000;


const startServer = async () => {
  try {
    
    await connectDB();
    
   
    app.listen(PORT, () => {
      console.log(`=================================`);
      console.log(`Server running on port ${PORT}`);
      console.log(`Documentation: http://localhost:${PORT}/api/docs`);
      console.log(`Health Check: http://localhost:${PORT}/health`);
      console.log(`=================================`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();