const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// Get all sessions
router.get("/", async (req, res) => {
    try {
        const sessions = await mongoose.connection.db.collection("sessions").find({}).limit(10).toArray();
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ message: "Error fetching sessions", error });
    }
});

module.exports = router;
