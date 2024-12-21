// Import the Mongoose library for MongoDB interactions
import mongoose from 'mongoose';

// Define the schema for the user collection
const userSchema = new mongoose.Schema({
    // The user's name, which is required
    name: { type: String, required: true },

    // The user's email, which is required and must be unique
    email: { type: String, required: true, unique: true },

    // The user's password, which is required
    password: { type: String, required: true },

    // A credit balance for the user with a default value of 5
    creditBalance: { type: Number, default: 5 }
});

// Create a model for the user collection
// If the model already exists, use it; otherwise, create a new one
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

// Export the user model for use in other parts of the application
export default userModel;
