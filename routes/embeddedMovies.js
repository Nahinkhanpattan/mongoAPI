const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// Get all embedded movies
router.get("/", async (req, res) => {
    try {
        const embeddedMovies = await mongoose.connection.db.collection("embedded_movies").find({}).limit(10).toArray();
        res.json(embeddedMovies);
    } catch (error) {
        res.status(500).json({ message: "Error fetching embedded movies", error });
    }
});

module.exports = router;
