// Import the necessary modules and components
import { createRoot } from 'react-dom/client'; // For rendering the React app
import { BrowserRouter } from 'react-router-dom'; // To enable routing in the app
import './index.css'; // Import global CSS styles
import App from './App.jsx'; // Main application component
import AppContextProvider from './context/AppContext.jsx'; // Context provider for global state management

// Render the React application into the root DOM element
createRoot(document.getElementById('root')).render(
  // Wrap the entire app with BrowserRouter to enable routing
  <BrowserRouter>
    {/* Wrap the app with AppContextProvider to provide global context */}
    <AppContextProvider>
      {/* Render the main App component */}
      <App />
    </AppContextProvider>
  </BrowserRouter>,
);
