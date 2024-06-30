const mongoose = require('mongoose');
const { Review, ReviewSchema } = require('./review');

const mallSchema = new mongoose.Schema({
    mallName: String,
    generalInfo: {
        openingHours: String,
        additionalInfo: String
    },
    mapUrl: String,
    stores: [String],
    reviews: [ReviewSchema]
}, { collection: 'mallsInfo' });  

const Mall = mongoose.model('Mall', mallSchema);

module.exports = Mall;