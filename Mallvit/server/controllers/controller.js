const mongodb = require('../config/mongodb');
async function insertItem(review, mallName) {
    try {
        const db = mongodb.getDb();
        const result = await db.collection(mallName).insertOne(review); // Insert the new item and return the result that is an object with the insertedId
        console.log(`New item inserted with the following id: ${result.insertedId}`);
        return result;
    } catch (err) {
        console.error('Error inserting item: ', err);
        throw err;  // It's important to throw the error again so the caller can handle it.
    }
}

async function getAllReviews(mallName){
    try {
        const db = mongodb.getDb();
        const result = await db.collection(mallName).find().toArray(); // Find all items in the specified collection and return them as an array
        return result;
    } catch (err) {
        console.error('Error getting all reviews: ', err);
        throw err;
    }
}

module.exports = {insertItem, getAllReviews};

