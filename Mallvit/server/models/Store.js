const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    neighbors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Store' }], // IDs of neighboring stores
    shortestPaths: [{ store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' }, distance: Number }] // Shortest paths to other stores
});


const Store = mongoose.model('Store', storeSchema);

module.exports = Store;