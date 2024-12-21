import { createContext, useState } from 'react';

// Create a context object to share data across components
export const AppContext = createContext();

const AppContextProvider = (props) => {
    // Initialize state to manage the `user` data
    const [user, setUser] = useState(false);

    // Initialize state to manage the `user login status` data
    const [showLogin, setShowLogin] = useState(false);

    // Define the value object to pass to the context provider
    const value = {
        user, // Current state of the user
        setUser, // Function to update the user state
        showLogin, // Current login state of the user
        setShowLogin // Function to update the user login state
    };

    // Wrap child components with the context provider to share the `value` object
    return (
        <AppContext.Provider value={value}>
            {props.children} {/* Render child components passed to the provider */}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
