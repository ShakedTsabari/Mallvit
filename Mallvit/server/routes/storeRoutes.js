const express = require('express');
const router = express.Router();


// API endpoint to find the optimal route between two stores
router.get('/optimal-route', (req, res) => {
    const { store1, store2 } = req.query;

    // Check if both store names are provided
    if (!store1 || !store2) {
        return res.status(400).json({ error: 'Both store names are required' });
    }

    // Check if store names are valid
    if (!storeData[store1] || !storeData[store2]) {
        return res.status(404).json({ error: 'One or both store names are invalid' });
    }

    // Calculate the optimal route (Replace with your actual logic)
    const optimalRoute = calculateOptimalRoute(storeData[store1], storeData[store2]);

    res.json({ route: optimalRoute });
});

// Dummy function for calculating optimal route (Replace with your actual implementation)
function calculateOptimalRoute(store1, store2) {
    // Placeholder logic for demonstration purposes
    return [`Start at ${store1.lat},${store1.lon}`, `End at ${store2.lat},${store2.lon}`];
}

module.exports = router;
