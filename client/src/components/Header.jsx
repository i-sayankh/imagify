import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { assets } from "../assets/assets"; // Importing assets for images and icons
import { motion } from "motion/react"; // Importing motion for animations
import { AppContext } from "../context/AppContext"; // Importing context for global state management

// Header component for the application
const Header = () => {
    // Destructuring `user` and `setShowLogin` from AppContext to manage user login state
    const { user, setShowLogin } = useContext(AppContext);
    const navigate = useNavigate(); // Hook for navigation

    // Event handler for the "Generate Images" button
    const onClickHandler = () => {
        if (user) {
            navigate('/result'); // Navigate to the result page if the user is logged in
        } else {
            setShowLogin(true); // Show the login modal if the user is not logged in
        }
    };

    return (
        // Animated container for the header section
        <motion.div
            initial={{ opacity: 0.2, y: 100 }} // Initial animation state
            transition={{ duration: 1 }} // Duration of the animation
            whileInView={{ opacity: 1, y: 0 }} // Animation state when the element is in view
            viewport={{ once: true }} // Run animation only once
            className="flex flex-col justify-center items-center text-center my-20"
        >
            {/* Tagline section with a bordered badge */}
            <motion.div
                initial={{ opacity: 0, y: -20 }} // Initial animation state for the tagline
                animate={{ opacity: 1, y: 0 }} // Animation state when visible
                transition={{ delay: 0.2, duration: 0.8 }} // Animation delay and duration
                className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500"
            >
                <p>Best Text to Image Generator</p>
                <img src={assets.star_icon} alt="Star Icon" /> {/* Icon for visual enhancement */}
            </motion.div>

            {/* Main heading for the feature description */}
            <motion.h1
                initial={{ opacity: 0 }} // Initial animation state
                animate={{ opacity: 1 }} // Animation state when visible
                transition={{ delay: 0.4, duration: 2 }} // Animation delay and duration
                className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center"
            >
                Turn Text to <span className="text-blue-600">Image</span>, in seconds.
            </motion.h1>

            {/* Subheading providing additional details */}
            <motion.p
                initial={{ opacity: 0, y: 20 }} // Initial animation state
                animate={{ opacity: 1, y: 0 }} // Animation state when visible
                transition={{ delay: 0.6, duration: 0.8 }} // Animation delay and duration
                className="text-center max-w-xl mx-auto mt-5"
            >
                Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.
            </motion.p>

            {/* Button to trigger the text-to-image generation feature */}
            <motion.button
                whileHover={{ scale: 1.05 }} // Scale up slightly on hover
                whileTap={{ scale: 0.95 }} // Scale down slightly on click
                initial={{ opacity: 0 }} // Initial animation state
                animate={{ opacity: 1 }} // Animation state when visible
                transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }} // Animation properties
                className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full"
                onClick={onClickHandler} // Attach click handler
            >
                Generate Images
                <img className="h-6" src={assets.star_group} alt="Star Group Icon" /> {/* Decorative icon */}
            </motion.button>

            {/* Section displaying sample generated images */}
            <motion.div
                initial={{ opacity: 0 }} // Initial animation state
                animate={{ opacity: 1 }} // Animation state when visible
                transition={{ delay: 1, duration: 1 }} // Animation delay and duration
                className="flex flex-wrap justify-center mt-16 gap-3"
            >
                {/* Render 6 sample images, alternating between two image assets */}
                {Array(6).fill('').map((item, index) => (
                    <motion.img
                        whileHover={{ scale: 1.05, duration: 0.1 }} // Scale up on hover
                        className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
                        src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2} // Alternate between two sample images
                        alt={`Sample Image ${index + 1}`} // Unique alt text for accessibility
                        key={index} // Unique key for each image
                        width={70} // Fixed width for images
                    />
                ))}
            </motion.div>

            {/* Footer text for attribution */}
            <motion.p
                initial={{ opacity: 0 }} // Initial animation state
                animate={{ opacity: 1 }} // Animation state when visible
                transition={{ delay: 1.2, duration: 0.8 }} // Animation delay and duration
                className="mt-2 text-neutral-600"
            >
                Generated images from Imagify
            </motion.p>
        </motion.div>
    );
};

export default Header; // Exporting the Header component for reuse
