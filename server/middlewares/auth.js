import jwt from 'jsonwebtoken';

// Middleware function to authenticate users
const userAuth = async (req, res, next) => {
    // Extract the token from request headers
    const { token } = req.headers;

    // Check if the token is not present
    if (!token) {
        // Respond with an error message if no token is provided
        return res.json({ success: false, message: 'Not Authorized' });
    }

    try {
        // Decode and verify the token using the secret key from environment variables
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the decoded token contains the user ID
        if (tokenDecode.id) {
            // Attach the user ID from the token to the request body for further processing
            req.body.userId = tokenDecode.id;
        } else {
            // Respond with an error if the token does not contain a valid user ID
            return res.json({ success: false, message: 'Not Authorized. Login again' });
        }

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Log any errors for debugging purposes
        console.log(error);

        // Respond with the error message to inform the client
        return res.json({ success: false, message: error.message });
    }
}

export default userAuth;
