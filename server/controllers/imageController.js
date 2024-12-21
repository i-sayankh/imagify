import FormData from 'form-data'; // Importing FormData module to handle form data
import axios from 'axios'; // Importing Axios for making HTTP requests
import userModel from "../models/userModel.js"; // Importing user model to interact with the database

// Controller function to generate an image using an external API
export const generateImage = async (req, res) => {
    try {
        // Destructure userId and prompt from the request body
        const { userId, prompt } = req.body;

        // Fetch the user details from the database using the provided userId
        const user = await userModel.findById(userId);

        // Check if user or prompt details are missing and return an error response
        if (!user || !prompt) {
            return res.json({ success: false, message: "Missing Details" });
        }

        // Check if the user has insufficient credit balance
        if (user.creditBalance === 0 || user.creditBalance < 0) {
            return res.json({
                success: false,
                message: "Insufficient Credit Balance",
                creditBalance: user.creditBalance
            });
        }

        // Create a new FormData instance and append the prompt for the API request
        const formData = new FormData();
        formData.append('prompt', prompt);

        // Send a POST request to the Clipdrop API to generate the image
        const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API_KEY, // Set the API key from environment variables
            },
            responseType: 'arraybuffer' // Specify the response type to receive raw binary data
        });

        // Convert the binary response data to a base64-encoded string
        const base64Image = Buffer.from(data, 'binary').toString('base64');

        // Create a Data URL for the base64-encoded image
        const resultImage = `data:/image/png;base64,${base64Image}`;

        // Deduct 1 credit from the user's credit balance
        await userModel.findByIdAndUpdate(user._id, {
            creditBalance: user.creditBalance - 1
        });

        // Return a success response with the updated credit balance
        return res.json({
            success: true,
            message: 'Image Generated',
            creditBalance: user.creditBalance - 1,
            resultImage
        });
    } catch (error) {
        console.log(error); // Log any errors to the console for debugging purposes
        return res.json({ success: false, message: error.message }); // Return an error response to the client
    }
};
