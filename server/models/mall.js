const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: String,
    body: String, 
    timestamp: { type: Date, default: Date.now }
})

// Define sub-schema for stores
const storeSchema = new mongoose.Schema({
    name: String,
    floor: String,
    phoneNumber: String,
    link: String,
    img: String
});

// Define sub-schema for reviews
const reviewSchema = new mongoose.Schema({
    name: String,
    subject: String,
    body: String,
    timestamp: { type: Date, default: Date.now },
    comments: [commentSchema]
});

// Main schema for Mall
const mallSchema = new mongoose.Schema({
    name: String,
    title: String,
    address: String,
    hours: [String], // This can also be an object if structured consistently, e.g., { monday: "9am-5pm", tuesday: "9am-5pm" }
    img: String,
    link: String,
    storesLink: String,
    stores: [storeSchema], // Array of stores
    mapUrl: String,
    reviews: [reviewSchema] // Array of reviews
});

const Mall = mongoose.model('Mall', mallSchema);

module.exports = Mall;
