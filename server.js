const express = require("express");
const dotEnv = require('dotenv');
const { MongoClient } = require("mongodb");
const app = express();
const PORT = 5001;  // Changed port number

dotEnv.config();  // Load environment variables from .env file

console.log("MONGO_URI:", process.env.MONGO_URI);  // Debugging line

MongoClient.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.log("Error", error);
  });
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is not defined. Check your .env file.");
    process.exit(1);  // Exit the process if no URI is found
}
// MongoDB connection options are already set in the first connection attempt


app.listen(PORT, () => {
  console.log(`Server Started and running at ${PORT}`);
});