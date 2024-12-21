// Import required modules
import express from 'express'; // Import Express for creating the server
import cors from 'cors'; // Import CORS to handle cross-origin requests
import 'dotenv/config'; // Import dotenv for environment variable management
import connectDb from './config/mongodb.js'; // Import the database connection module

// Set the port from environment variables or default to 4000
const PORT = process.env.PORT || 4000;

// Initialize the Express application
const app = express();

// Middleware to parse JSON data from incoming requests
app.use(express.json());

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Establish a connection to the MongoDB database
await connectDb(); // Ensures database connection before proceeding

// Define a simple route to verify the API is working
app.get('/', (req, res) => res.send("API Working"));

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
