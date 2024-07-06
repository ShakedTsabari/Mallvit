// const app = require('./app');
// const mongodb = require('./config/mongodb');

// const PORT = process.env.PORT || 3000;

// console.log("Starting server, attempting to connect to MongoDB...");

// mongodb.connectToServer((err) => {
//     if (err) {
//         console.error("Error connecting to MongoDB:", err);
//         process.exit(1);
//     }
//     console.log(`MongoDB connected. Starting server on port ${PORT}...`);
//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     });
// });


//const express = require('express');
const mongoose = require('mongoose');
const app = require('./app'); // Import the app configuration

const PORT = process.env.PORT || 3000;
const mongoURI = 'mongodb://localhost:27017/malls';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
