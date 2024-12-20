// Import necessary modules and components from React Router and local files
import { Route, Routes } from 'react-router-dom';
import BuyCredit from "./pages/BuyCredit"; // Page for buying credits
import Home from "./pages/Home"; // Home page of the application
import Result from "./pages/Result"; // Page displaying results
import Navbar from './components/Navbar'; // Reusable Navbar component
import Footer from './components/Footer';

// Main App component that serves as the root of the application
const App = () => {
  return (
    // Container for the application with padding and gradient background styling
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      {/* Include the Navbar component to be displayed on all pages */}
      <Navbar />

      {/* Define routes for different pages in the application */}
      <Routes>
        {/* Route for the Home page */}
        <Route path='/' element={<Home />} />

        {/* Route for the Result page */}
        <Route path='/result' element={<Result />} />

        {/* Route for the Buy Credit page */}
        <Route path='/buy-credit' element={<BuyCredit />} />
      </Routes>

      {/* Include the Footer component to be displayed on all pages */}
      <Footer />
    </div>
  );
};

export default App; // Export the App component as the default export
