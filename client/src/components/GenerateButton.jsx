import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react"; // Importing motion for animations
import { assets } from "../assets/assets"; // Importing assets for use in the component
import { AppContext } from "../context/AppContext";

// GenerateButton component to render a button with a heading and image
const GenerateButton = () => {
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
        <motion.div
            initial={{ opacity: 0.2, y: 100 }} // Initial animation state
            transition={{ duration: 1 }} // Duration of the animation
            whileInView={{ opacity: 1, y: 0 }} // Animation state when the element is in view
            viewport={{ once: true }} // Run animation only once
            className="pb-16 text-center"
        >
            {/* Heading section with responsive font size and padding */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">
                See the magic. Try now
            </h1>

            {/* Button to trigger image generation with hover effect and icon */}
            <button
                className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500"
                onClick={onClickHandler} // Attach click handler
            >
                {/* Button text */}
                Generate Images

                {/* Image icon inside the button */}
                <img src={assets.star_group} alt="" className="h-6" />
            </button>
        </motion.div>
    )
}

export default GenerateButton;
