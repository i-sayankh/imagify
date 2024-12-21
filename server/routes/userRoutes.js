// Import the express module to create a router
import express from 'express';

// Import controller functions for user registration and login
import { registerUser, loginUser } from "../controllers/userController.js";

// Create a new router instance for handling user-related routes
const userRouter = express.Router();

/**
 * Route to handle user registration.
 * POST request to '/register' will trigger the registerUser controller.
 */
userRouter.post('/register', registerUser);

/**
 * Route to handle user login.
 * POST request to '/login' will trigger the loginUser controller.
 */
userRouter.post('/login', loginUser);

// Export the router to be used in other parts of the application
export default userRouter;
