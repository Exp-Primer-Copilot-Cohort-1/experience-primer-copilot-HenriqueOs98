// Synthesizing 9/10 solutions (Duplicates hidden)
// ========================================

// Create web server for comment
// ========================================

// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle request
router.get('/', commentController.comment_list);
router.post('/create', commentController.comment_create_post);
router.get('/create', commentController.comment_create_get);
router.get('/:id/delete', commentController.comment_delete_get);
module.exports = router;