import { useContext, useEffect, useState } from "react";
import { motion } from "motion/react"; // Importing motion for animations
import { assets } from "../assets/assets"; // Importing assets like icons
import { AppContext } from "../context/AppContext"; // Importing application context for global state management
import { toast } from "react-toastify"; // For displaying toast notifications
import axios from 'axios'; // For making HTTP requests

// Login Component
const Login = () => {
    // State hooks for managing component state
    const [state, setState] = useState('Login'); // State to toggle between 'Login' and 'Sign Up'
    const [name, setName] = useState(''); // State to hold user's name (only for Sign Up)
    const [email, setEmail] = useState(''); // State to hold user's email
    const [password, setPassword] = useState(''); // State to hold user's password
    const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext); // Accessing the context to manage login modal visibility and user state

    // Handle form submission (Login or Sign Up)
    const onSubmitHandler = async (e) => {
        e.preventDefault(); // Prevent default form submission to handle it manually

        try {
            // Conditional handling for Login or Sign Up
            if (state === 'Login') {
                // Login API call
                const { data } = await axios.post(backendUrl + '/api/user/login', { email, password });
                if (data.success) {
                    // Store token and user data in global state and localStorage on successful login
                    setToken(data.token); 
                    setUser(data.user); 
                    localStorage.setItem('token', data.token); 
                    setShowLogin(false); // Close the login modal
                    toast.success(`Welcome back, ${data.user.name.split(' ')[0]}! You have successfully logged in.`); // Display success message
                } else {
                    toast.error(data.message); // Display error message if login fails
                }
            } else {
                // Sign Up API call
                const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password });
                if (data.success) {
                    // Store token and user data in global state and localStorage on successful registration
                    setToken(data.token); 
                    setUser(data.user); 
                    localStorage.setItem('token', data.token); 
                    setShowLogin(false); // Close the login modal
                    toast.success('Congratulations! You have successfully signed up. Welcome aboard!'); // Display success message
                } else {
                    toast.error(data.message); // Display error message if registration fails
                }
            }
        } catch (error) {
            toast.error(error.message); // Display error message in case of network/API failure
        }
    }

    // useEffect to manage body scroll behavior when the modal is open
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
                initial={{ opacity: 0.2, y: 50 }} // Initial animation state for opacity and vertical position
                transition={{ duration: 0.3 }} // Duration of the animation
                whileInView={{ opacity: 1, y: 0 }} // Animation state when the element is in view
                viewport={{ once: true }} // Run animation only once when in view
                className="relative bg-white p-10 rounded-xl text-slate-500"
                onSubmit={onSubmitHandler} // Submit form when the button is clicked
            >
                {/* Header Section */}
                <h1 className="text-center text-2xl text-neutral-700 font-medium">{state}</h1> {/* Display either Login or Sign Up */}
                <p className="text-sm">Welcome Back! Please sign in to continue</p>

                {/* Full Name Field - Visible only during Sign Up */}
                {state !== 'Login' &&
                    <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
                        <img src={assets.user_icon} alt="" /> {/* User Icon */}
                        <input
                            onChange={(e) => setName(e.target.value)} // Update name state on input change
                            value={name} // Bind input value to the name state
                            type="text"
                            placeholder="Full Name" // Placeholder for the full name field
                            required
                            className="outline-none text-sm"
                        />
                    </div>
                }

                {/* Email Field */}
                <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
                    <img src={assets.email_icon} alt="" /> {/* Email Icon */}
                    <input
                        onChange={(e) => setEmail(e.target.value)} // Update email state on input change
                        value={email} // Bind input value to the email state
                        type="email"
                        placeholder="Email" // Placeholder for the email field
                        required
                        className="outline-none text-sm"
                    />
                </div>

                {/* Password Field */}
                <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
                    <img src={assets.lock_icon} alt="" /> {/* Lock Icon */}
                    <input
                        onChange={(e) => setPassword(e.target.value)} // Update password state on input change
                        value={password} // Bind input value to the password state
                        type="password"
                        placeholder="Password" // Placeholder for the password field
                        required
                        className="outline-none text-sm"
                    />
                </div>

                {/* Forgot Password Link */}
                <p className="text-sm text-blue-600 my-4 cursor-pointer">Forgot Password?</p>

                {/* Submit Button */}
                <button className="bg-blue-600 w-full text-white py-2 rounded-full">
                    {state === 'Login' ? 'Login' : 'Create Account'} {/* Button text changes based on state */}
                </button>

                {/* Footer Section for toggling between Login/Sign Up */}
                {state === 'Login' ?
                    <p className="mt-5 text-center">
                        Don&apos;t have an account?
                        <span
                            className="text-blue-600 cursor-pointer"
                            onClick={() => { setState('Sign Up'); }} // Toggle to Sign Up state
                        >
                            Sign Up
                        </span>
                    </p>
                    :
                    <p className="mt-5 text-center">
                        Already have an account?
                        <span
                            className="text-blue-600 cursor-pointer"
                            onClick={() => setState('Login')} // Toggle to Login state
                        >
                            Login
                        </span>
                    </p>
                }

                {/* Close Icon */}
                <img
                    src={assets.cross_icon} alt="" // Close icon
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={() => setShowLogin(false)} // Close the modal when clicked
                />
            </motion.form>
        </div>
    );
};

export default Login;
