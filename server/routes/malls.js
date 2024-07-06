const express = require('express');
const router = express.Router();
const mallController = require('../controllers/controller');

router.get('/', mallController.getAllMalls);
router.get('/:mallName', mallController.getMall);
router.get('/:mallName/reviews', mallController.getReviews);
router.post('/:mallName/reviews', mallController.addReview);
router.post('/:mallName/reviews/:reviewId', mallController.addReview);
module.exports = router;

