const express = require('express');

const loginRouter = require('./routes/loginRoute');
const storeRoutes = require('./routes/storeRoutes');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/stores', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));



const app = express();
app.use(express.json());
app.use('/api/store', storeRoutes);


module.exports = app;