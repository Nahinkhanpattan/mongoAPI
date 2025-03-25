const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// Get all theaters
router.get("/", async (req, res) => {
    try {
        const theaters = await mongoose.connection.db.collection("theaters").find({}).limit(10).toArray();
        res.json(theaters);
    } catch (error) {
        res.status(500).json({ message: "Error fetching theaters", error });
    }
});

module.exports = router;
