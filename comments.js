//create a web server
const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const auth = require("../middleware/auth");
const commentValidator = require("../middleware/validators/commentValidator");

// @route POST api/comment
// @desc Create a comment
// @access Private
router.post(
  "/",
  auth,
  commentValidator.validateCreateComment,
  commentController.createComment
);

// @route DELETE api/comment/:comment_id
// @desc Delete a comment
// @access Private
router.delete("/:comment_id", auth, commentController.deleteComment);

// @route PUT api/comment/:comment_id
// @desc Update a comment
// @access Private
router.put(
  "/:comment_id",
  auth,
  commentValidator.validateUpdateComment,
  commentController.updateComment
);

// @route GET api/comment/:comment_id
// @desc Get a comment
// @access Private
router.get("/:comment_id", auth, commentController.getComment);

// @route GET api/comment
// @desc Get all comments
// @access Private
router.get("/", auth, commentController.getAllComments);

module.exports = router;