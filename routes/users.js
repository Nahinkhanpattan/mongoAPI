const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
    try {
        const users = await mongoose.connection.db.collection("users").find({}).limit(10).toArray();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
});

module.exports = router;
