const Mall = require("../models/mall");
let id = 1;

// return mall list from db
exports.getAllMalls = async (req, res) => {
    try {
        const malls = await Mall.find({}, 'title address img').lean();
        console.log(malls);
        res.json(malls); // return mall list
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch malls', error: error.message });
    }
};

// return mall object from db
exports.getMall = async (req, res) => {
    const { mallName } = req.params;
    try {
        const mall = await Mall.findOne({ title: mallName }).lean();
        if (!mall) {
            return res.status(404).json({ message: "Mall not found" });
        }
        res.json(mall); // return mall object
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch mall ' + mallName, error: error.message });
    }
}

// return reviews of mallName mall
exports.getReviews = async (req, res) => {
    const { mallName } = req.params;
    const startOfDay = new Date();
    startOfDay.setHours(0,0,0,0); // Set to midnight (start of today)
    const endOfDay = new Date(startOfDay);
    endOfDay.setDate(endOfDay.getDate() + 1); // Set to midnight of the next day

    try {
        const results = await Mall.aggregate([
            { $match: { title: mallName } }, // Match the mall by title
            { $unwind: '$reviews' }, // Unwind the reviews array for individual review manipulation
            { $match: {
                'reviews.timestamp': { $gte: startOfDay, $lt: endOfDay } // Filter reviews by timestamp
            }},
            { $group: {
                _id: '$_id', // Group the reviews back under the original document ID
                reviews: { $push: '$reviews' } // Push the filtered reviews into a new array
            }},
            { $project: { _id: 0, reviews: 1 } } // Project only the reviews array
        ]);

        if (results.length === 0 || !results[0].reviews) {
            return res.status(404).json({ message: "No reviews found for today or mall not found" });
        }
        const sortedReviews = results[0].reviews.sort((a, b) => b.timestamp - a.timestamp);
        res.json(sortedReviews); // return only the filtered reviews array in decending order
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch today\'s reviews', error: error.message });
    }
};


// (post) add a review to mallName mall
exports.addReview = async (req, res) => {
    const { name, subject, body } = req.body;
    const { mallName } = req.params;
    const curId = id;
    id++;

    try {
        const newReview = { id: curId ,name, subject, body, timestamp: new Date(), comments:[] };
        const result = await Mall.findOneAndUpdate(
            { title: mallName },
            { $push: { reviews: newReview } },
            { new: true, upsert: false }
        );
        if (!result) {
            return res.status(404).json({ message: "Mall not found" });
        }
        // res.status(201).json(result); // 
        //return the updated reviews array
        res.status(201).json(result.reviews);
    } catch (error) {
        res.status(500).json({ message: 'Failed to save review in ' + mallName, error: error.message });
    }
}

exports.addComment = async (req, res) => {
    const { name, body} = req.body;
    const { mallName, revId } = req.params;
    const reviewId = parseInt(revId);

    try{
        const newComment = {name, body, timestamp: new Date() };
        const result = await Mall.findOneAndUpdate(
            {   title: mallName,
                "reviews.id": reviewId },
            { $push: { "reviews.$.comments": newComment } },
            { new: true }
        )

        if (!result) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add comment to review ' + reviewId + ' in ' + mallName, error: error.message });
    } 
}


module.exports = exports; // export all functions in this file