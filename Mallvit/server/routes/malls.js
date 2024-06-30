const express = require('express');
const router = express.Router();
//const { Review, ReviewSchema } = require('../models/review');
const Mall = require('../models/mall'); // Assuming mall.js contains the Mall schema

// router.post('/', async (req, res) => {
//     try {
//         const { mallName, generalInfo, mapUrl, stores, reviews } = req.body;

//         // Create a new mall instance using the Mall model
//         const newMall = new Mall({
//             mallName,
//             generalInfo,
//             mapUrl,
//             stores,
//             reviews
//         });

//         // Save the new mall to the database
//         const savedMall = await newMall.save();
//         res.status(201).json(savedMall);
//     } catch (error) {
//         console.error('Failed to create new mall:', error);
//         res.status(500).json({ message: 'Failed to create new mall', error: error.message });
//     }
// });

// add a review to mallName mall
router.post('/:mallName/reviews', async (req, res) => {
    const { name, subject, body } = req.body;
    const { mallName } = req.params;

    try {
        const newReview = { name, subject, body, timestamp: new Date() };
        const result = await Mall.findOneAndUpdate(
            { mallName: mallName },
            { $push: { reviews: newReview } },
            { new: true, upsert: false }
        );
        if (!result) {
            return res.status(404).json({ message: "Mall not found" });
        }
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Failed to save review in ' + mallName, error: error.message });
    }
});


// get all reviews of a mall
router.get('/:mallName/reviews', async (req, res) => {
    const { mallName } = req.params;

    try {
        const mall = await Mall.findOne({ mallName: mallName }, 'reviews').lean();
        // lean is used to return a plain JS object instead of a mongoose document
        if (!mall) { 
            return res.status(404).json({ message: "Mall not found" });
        }
        const sortedReviews = mall.reviews.sort((a, b) => b.timestamp - a.timestamp);
        res.json(sortedReviews);    
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch reviews from ' + mallName, error: error.message });
    }
});

// get generalInfo of a mall
router.get('/:mallName/generalInfo', async (req, res) => {
    const { mallName } = req.params;

    try {
        const mall = await Mall.findOne({ mallName: mallName }, 'generalInfo').lean();
        if (!mall) {
            return res.status(404).json({ message: "Mall not found" });
        }
        res.redirect(mall.mapUrl); // redirect - to open the mapUrl and show the map
        //res.json(mall.generalInfo);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch general info from ' + mallName, error: error.message });
    }
});

// get mapUrl of a mall
router.get('/:mallName/mapUrl', async (req, res) => {
    const { mallName } = req.params;

    try {
        const mall = await Mall.findOne({ mallName: mallName }, 'mapUrl').lean();
        if (!mall) {
            return res.status(404).json({ message: "Mall not found" });
        }
        res.json(mall.mapUrl);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch map url from ' + mallName, error: error.message });
    }
});

// check if server works
router.get('/', (req, res) => {
    res.send('Server works');
});

module.exports = router;
