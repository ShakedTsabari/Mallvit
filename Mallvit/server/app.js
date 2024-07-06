const express = require('express');
const cors = require('cors');

const mallRoutes = require('./routes/malls'); // Import the mall routes

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173' // Allow the frontend to access this server
  }));
app.use('/malls', mallRoutes);

  
module.exports = app;
