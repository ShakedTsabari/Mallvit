const express = require('express');
const mallRoutes = require('./routes/malls'); // Import the mall routes

const app = express();

app.use(express.json());
app.use('/malls', mallRoutes);

module.exports = app;
