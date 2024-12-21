// Import the mongoose library for MongoDB object modeling.
import mongoose from "mongoose";

// Asynchronous function to establish a connection with the MongoDB database.
const connectDb = async () => {
    // Event listener for the 'connected' event, triggered when the database connection is successfully established.
    mongoose.connection.on('connected', () => {
        console.log("Database Connected"); // Log a success message when the database is connected.
    });

    // Connect to the MongoDB database using the URI from environment variables
    // and append the '/imagify' database name to the connection string.
    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`);
}

// Export the connectDb function as the default export of this module.
export default connectDb;
