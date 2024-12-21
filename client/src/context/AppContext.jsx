import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'; // For making HTTP requests

// Create a context object to share data across the application
export const AppContext = createContext();

// Define the context provider component
const AppContextProvider = (props) => {
    // State to manage the `user` object, which contains information about the logged-in user
    const [user, setUser] = useState(false);

    // State to manage whether the login modal or login interface is shown
    const [showLogin, setShowLogin] = useState(false);

    // State to store the authentication token, initialized from localStorage
    const [token, setToken] = useState(localStorage.getItem('token'));

    // State to track user credit information
    const [credit, setCredit] = useState(false);

    // Backend URL fetched from environment variables for API interactions
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // Function to load the user's credit data and other relevant user information
    const loadCreditsData = async () => {
        try {
            // Making an HTTP GET request to fetch user credit data from the backend
            const { data } = await axios.get(backendUrl + '/api/user/credits', { headers: { token } });

            // If the request is successful, update the state with credit and user information
            if (data.success) {
                setCredit(data.credits);
                setUser(data.user);
            } else {
                // Show an error message if the request fails
                toast.error(data.message);
            }
        } catch (error) {
            // Log the error and show an error message
            console.log(error);
            toast.error(error.message);
        }
    }

    // Function to log out the user by clearing token and user data
    const logout = () => {
        // Remove the authentication token from localStorage
        localStorage.removeItem('token');

        // Reset the token and user states
        setToken('');
        setUser(null);

        toast.success('You have successfully logged out. See you next time!');
    }

    // useEffect hook to load user data when the token changes
    useEffect(() => {
        // If there's a valid token, load the user credits data
        if (token) {
            loadCreditsData();
        }
    }, [token]) // Dependency array, effect runs when the `token` changes

    // Define the value object that holds states and their update functions
    const value = {
        user, // Current state of the `user` object
        setUser, // Function to update the `user` state
        showLogin, // Current state to track login visibility
        setShowLogin, // Function to toggle login visibility
        backendUrl, // Backend API URL for the application
        token, // Authentication token for API requests
        setToken, // Function to update the authentication token
        credit, // User's credit information
        setCredit, // Function to update the credit information
        loadCreditsData, // Function to load the user's credits
        logout // Function to handle user logout
    };

    // Wrap child components with the context provider to share the `value` object globally
    return (
        <AppContext.Provider value={value}>
            {props.children} {/* Render child components passed into the provider */}
        </AppContext.Provider>
    );
};

// Export the context provider component for use in the application
export default AppContextProvider;
