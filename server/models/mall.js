const mongoose = require('mongoose');
const { Review, ReviewSchema } = require('./review');

const mallSchema = new mongoose.Schema({
    name: String,
    title: String,
    address: String,
    hours: {},
    img: String,
    link: String,
    storesLink: String,
    stores: {
        name: String,
        floor: String,
        phoneNumber: String,
        link: String,
        img: String
    },
    mapUrl: String,
    reviews: {
        name: String,
        subject: String,
        body: String,
        timestamp: { type: Date, default: Date.now },
        comments: {}
    }
}, { collection: 'mallsInfo'});  

const Mall = mongoose.model('Mall', mallSchema);

module.exports = Mall;

