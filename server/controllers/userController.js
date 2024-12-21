import userModel from "../models/userModel.js"; // Importing the user model to interact with the database
import bcrypt from 'bcrypt'; // Importing bcrypt for password hashing
import jwt from 'jsonwebtoken'; // Importing jwt for generating JSON Web Tokens

// Controller to handle user registration
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body; // Extracting user details from the request body

        // Check if all required details are provided
        if (!name || !email || !password) {
            return res.json({ success: false, message: "Missing Details" });
        }

        // Generate a salt and hash the user's password for security
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Prepare user data for saving in the database
        const userData = {
            name,
            email,
            password: hashedPassword
        };

        // Create a new user instance and save it to the database
        const newUser = new userModel(userData);
        const user = await newUser.save();

        // Generate a JSON Web Token for the newly registered user
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        // Respond with success, including the token and user name
        return res.json({ success: true, token, user: { name: user.name } });
    } catch (error) {
        console.log(error); // Log any errors to the console
        return res.json({ success: false, message: error.message }); // Respond with error message
    }
}

// Controller to handle user login
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body; // Extracting login details from the request body

        // Check if all required details are provided
        if (!email || !password) {
            return res.json({ success: false, message: "Missing Details" });
        }

        // Search for a user with the provided email in the database
        const user = await userModel.findOne({ email });

        // If the user is not found, respond with an appropriate message
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            // If the password matches, generate a JSON Web Token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

            // Respond with success, including the token and user name
            return res.json({ success: true, token, user: { name: user.name } });
        } else {
            // If the password does not match, respond with an error
            return res.json({ success: false, message: "Invalid Credentials" });
        }

    } catch (error) {
        console.log(error); // Log any errors to the console
        return res.json({ success: false, message: error.message }); // Respond with error message
    }
}

// Controller to handle user credits
export const userCredits = async (req, res) => {
    try {
        // Extracting userId from the request body
        const { userId } = req.body;

        if (!userId) {
            return res.json({ success: false, message: 'Not Authorized. Login again' });
        }

        // Search for a user with the provided userId in the database
        const user = await userModel.findById(userId);

        // Respond with success, including the creditBalance and user name
        return res.json({ success: true, credits: user.creditBalance, user: { name: user.name } });
    } catch (error) {
        console.log(error); // Log any errors to the console
        return res.json({ success: false, message: error.message }); // Respond with error message
    }
}
