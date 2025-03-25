const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// Get all comments
router.get("/", async (req, res) => {
    try {
        const comments = await mongoose.connection.db.collection("comments").find({}).limit(10).toArray();
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching comments", error });
    }
});

module.exports = router;
