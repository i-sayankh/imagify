import { useContext, useEffect, useState } from "react";
import { motion } from "motion/react"; // Importing motion for animations
import { assets } from "../assets/assets"; // Importing assets like icons
import { AppContext } from "../context/AppContext"; // Importing application context for global state management

// Login Component
const Login = () => {
    const [state, setState] = useState('Login'); // State to toggle between 'Login' and 'Sign Up'
    const { setShowLogin } = useContext(AppContext); // Accessing the context to toggle the visibility of the login modal

    useEffect(() => {
        // Disable body scroll when the modal is open
        document.body.style.overflow = 'hidden';

        // Re-enable body scroll when the modal is closed
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
            {/* Modal Container */}
            <motion.form
                initial={{ opacity: 0.2, y: 50 }} // Initial animation state
                transition={{ duration: 0.3 }} // Duration of the animation
                whileInView={{ opacity: 1, y: 0 }} // Animation state when the element is in view
                viewport={{ once: true }} // Run animation only once
                className="relative bg-white p-10 rounded-xl text-slate-500"
            >
                {/* Header Section */}
                <h1 className="text-center text-2xl text-neutral-700 font-medium">{state}</h1>
                <p className="text-sm">Welcome Back! Please sign in to continue</p>

                {/* Full Name Field - Visible only during Sign Up */}
                {state !== 'Login' &&
                    <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
                        <img src={assets.user_icon} alt="" /> {/* User Icon */}
                        <input type="text" placeholder="Full Name" required className="outline-none text-sm" />
                    </div>
                }

                {/* Email Field */}
                <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
                    <img src={assets.email_icon} alt="" /> {/* Email Icon */}
                    <input type="email" placeholder="Email" required className="outline-none text-sm" />
                </div>

                {/* Password Field */}
                <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
                    <img src={assets.lock_icon} alt="" /> {/* Lock Icon */}
                    <input type="password" placeholder="Password" required className="outline-none text-sm" />
                </div>

                {/* Forgot Password Link */}
                <p className="text-sm text-blue-600 my-4 cursor-pointer">Forgot Password?</p>

                {/* Submit Button */}
                <button className="bg-blue-600 w-full text-white py-2 rounded-full">
                    {state === 'Login' ? 'Login' : 'Create Account'}
                </button>

                {/* Footer Section for toggling Login/Sign Up */}
                {state === 'Login' ?
                    <p className="mt-5 text-center">
                        Don&apos;t have an account?
                        <span
                            className="text-blue-600 cursor-pointer"
                            onClick={() => { setState('Sign Up'); }}
                        >
                            Sign Up
                        </span>
                    </p>
                    :
                    <p className="mt-5 text-center">
                        Already have an account?
                        <span
                            className="text-blue-600 cursor-pointer"
                            onClick={() => setState('Login')}
                        >
                            Login
                        </span>
                    </p>
                }

                {/* Close Icon */}
                <img
                    src={assets.cross_icon} alt="" // Close icon
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={() => setShowLogin(false)} // Close the modal
                />
            </motion.form>
        </div>
    );
};

export default Login;
