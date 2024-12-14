// const express = require("express");
// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const studentRoutes = require("./routes/studentRoutes");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(bodyParser.json());
// app.use(express.static("public"));

// // API Routes
// app.use("/api/students", studentRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Use JSON middleware to parse incoming requests
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static("public"));

// MongoDB connection setup
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Define routes
const studentRoutes = require("./routes/studentRoutes");
app.use("/api/students", studentRoutes);

// Set the port for the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
