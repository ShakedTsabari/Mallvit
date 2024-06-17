// src/routes/storeRoutes.js
const express = require('express');
const storeController = require('../controllers/storeController');
const router = express.Router();

router.get('/', storeController.getAllStores);
router.post('/', storeController.createStore);
router.get('/:id', storeController.getStoreById);
router.put('/:id', storeController.updateStore);
router.delete('/:id', storeController.deleteStore);
router.get('/shortest-path/:fromId/:toId', storeController.getShortestPath);

module.exports = router;
