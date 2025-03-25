const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/comments", require("./routes/comments"));
app.use("/api/embeddedMovies", require("./routes/embeddedMovies"));
app.use("/api/movies", require("./routes/movies"));
app.use("/api/sessions", require("./routes/sessions"));
app.use("/api/theaters", require("./routes/theaters"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
