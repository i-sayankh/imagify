import { Link, useNavigate } from "react-router-dom"; // Importing routing components from react-router-dom
import { assets } from "../assets/assets"; // Importing assets for images and other static files
import { useContext } from "react"; // Importing useContext hook to consume context
import { AppContext } from "../context/AppContext"; // Importing the application context

// Navbar Component
const Navbar = () => {
    const { user, setShowLogin, logout, credit } = useContext(AppContext); // Accessing the user data from AppContext
    const navigate = useNavigate(); // Hook for navigation within the app

    return (
        <div className="flex items-center justify-between py-4"> {/* Main container for the Navbar */}
            {/* Logo and Home Link */}
            <Link to='/'>
                <img src={assets.logo} alt="" className="w-28 sm:w-32 lg:w-40" /> {/* Logo Image */}
            </Link>

            {/* Conditional Rendering Based on User Authentication */}
            <div>
                {
                    user ? (
                        // If user is authenticated
                        <div className="flex items-center gap-2 sm:gap-3">
                            {/* Button to Buy Credits */}
                            <button onClick={() => navigate('/buy-credit')} className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700">
                                <img src={assets.credit_star} alt="" className="w-5" /> {/* Credit Icon */}
                                <p className="text-xs sm:text-sm font-medium text-gray-600">Credits Left: {credit}</p> {/* Displaying Remaining Credits */}
                            </button>

                            {/* Greeting for Logged-in User */}
                            <p className="text-gray-600 max-sm:hidden pl-4">Hi! {user.name}</p>

                            {/* Profile Icon and Dropdown Menu */}
                            <div className="relative group">
                                <img src={assets.profile_icon} alt="" className="w-10 drop-shadow" /> {/* Profile Icon */}

                                {/* Dropdown Menu for Profile Options */}
                                <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                                    <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                                        <li onClick={logout} className="py-1 px-2 cursor-pointer pr-10">Logout</li> {/* Logout Option */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // If user is not authenticated
                        <div className="flex items-center gap-2 sm:gap-5">
                            {/* Link to Pricing Page */}
                            <p onClick={() => navigate('/buy-credit')} className="cursor-pointer">Pricing</p>

                            {/* Login Button */}
                            <button
                                onClick={() => setShowLogin(true)}
                                className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full"
                            >
                                Login
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;
