const express = require('express');
const router = express.Router();
const mallController = require('../controllers/controller');

router.get('/', mallController.getAllMalls);
router.get('/:mallName', mallController.getMall);
router.get('/:mallName/posts', mallController.getPosts);
router.post('/:mallName/posts', mallController.addPost);
router.post('/:mallName/posts/:postId/comments', mallController.addComment);
router.get('/:mallName/posts/:postId', mallController.getPostById);

module.exports = router;