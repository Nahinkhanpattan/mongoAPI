const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// Get all movies
router.get("/", async (req, res) => {
    try {
        const movies = await mongoose.connection.db.collection("movies").find({}).limit(30).toArray();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: "Error fetching movies", error })
    }
});

module.exports = router;
