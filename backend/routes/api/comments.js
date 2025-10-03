const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

// "hey Github Copilot, write a route to get all comments for an item"

router.get("/item/:itemId", async (req, res, next) => {
  try {
    const comments = await Comment.find({ item: req.params.itemId }).populate("author", "username");
    res.json({ comments });
  } catch (err) {
    next(err);
  }
});


module.exports = router;
