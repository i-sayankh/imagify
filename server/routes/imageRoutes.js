// Importing the express module
import express from 'express';

// Importing the generateImage controller function to handle image generation requests
import { generateImage } from '../controllers/imageController.js';

// Importing the user authentication middleware to secure the route
import userAuth from '../middlewares/auth.js';

// Creating a new router instance for handling image-related routes
const imageRouter = express.Router();

/**
 * Route to generate an image.
 * - HTTP Method: POST
 * - Middleware: `userAuth` ensures the user is authenticated before accessing the endpoint
 * - Controller: `generateImage` handles the business logic for generating images
 */
imageRouter.post('/generate-image', userAuth, generateImage);

// Exporting the router to be used in the main application
export default imageRouter;
