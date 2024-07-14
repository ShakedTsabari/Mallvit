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
const postSchema = new mongoose.Schema({
    name: String,
    title: String,
    store: String,
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
    posts: [postSchema] // Array of reviews
});

const Mall = mongoose.model('Mall', mallSchema);

module.exports = Mall;
