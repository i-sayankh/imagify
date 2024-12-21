// Import required modules
import express from 'express'; // Import Express for creating the server and handling routing
import cors from 'cors'; // Import CORS to allow and manage cross-origin requests
import 'dotenv/config'; // Import dotenv to load environment variables from a .env file into process.env
import connectDb from './config/mongodb.js'; // Import the database connection module for MongoDB
import userRouter from './routes/userRoutes.js'; // Import the user-related routes

// Set the port from environment variables or use a default value of 4000
const PORT = process.env.PORT || 4000;

// Initialize the Express application
const app = express();

// Middleware to parse JSON data from incoming HTTP requests
app.use(express.json());

// Middleware to enable Cross-Origin Resource Sharing (CORS)
// This allows your API to handle requests from different origins (e.g., frontend hosted on a different domain)
app.use(cors());

// Establish a connection to the MongoDB database
// Using 'await' ensures the database connection is successful before proceeding
await connectDb(); // Connect to the MongoDB database using the configuration in ./config/mongodb.js

// Register user-related routes under the "/api/user" endpoint
// All routes defined in userRoutes.js will be prefixed with "/api/user"
app.use('/api/user', userRouter);

// Define a simple route to verify that the API is up and running
// When the root URL ("/") is accessed, it sends a plain text response
app.get('/', (req, res) => res.send("API Working"));

// Start the server and make it listen for incoming requests on the specified port
// Once the server starts, a message is logged to indicate successful startup
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
