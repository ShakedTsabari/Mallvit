const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: String,
    subject: String,
    body: String,
    timestamp: { type: Date, default: Date.now }  // Correct way to set a default date
},{ collection: 'mallsInfo' }); 

const Review = mongoose.model('Review', ReviewSchema);

module.exports = {
    ReviewSchema,  // Exporting the schema might be useful if you want to extend or reuse the schema
    Review         // Exporting the model for direct use
};