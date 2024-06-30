const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    name: String,
    img: String,
    floor: String,
    phoneNumber: String,
    link: String,
});

const mallSchema = new mongoose.Schema({
    name: String,
    title: String,
    address: String,
    hours: [String],
    img: String,
    link: String,
    storeLink: String,
    stores: [storeSchema],
});


const Mall = mongoose.model('Mall', mallSchema);
const Store = mongoose.model('Store', storeSchema);

module.exports = { Mall, Store };
