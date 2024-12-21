import { motion } from "motion/react"; // Importing motion for animations
import { assets, testimonialsData } from "../assets/assets"

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }} // Initial animation state
            transition={{ duration: 1 }} // Duration of the animation
            whileInView={{ opacity: 1, y: 0 }} // Animation state when the element is in view
            viewport={{ once: true }} // Run animation only once
            className="flex flex-col items-center justify-center my-20 py-12"
        >
            {/* Header for the title */}
            <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Customer Testimonials</h1>

            {/* Subtext describing the purpose of the tool */}
            <p className="text-gray-500 mb-12">What Our Users Are Saying</p>

            {/* Testimonials section - Flex container to wrap the testimonials */}
            <div className="flex flex-wrap gap-6">
                {/* Map over each testimonial to display it */}
                {testimonialsData.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all"
                    >
                        {/* Flex container for individual testimonial */}
                        <div className="flex flex-col items-center">
                            {/* Profile image of the user */}
                            <img src={testimonial.image} alt="" className="rounded-full w-14" />

                            {/* Name of the user */}
                            <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>

                            {/* Role of the user */}
                            <p className="text-gray-500 mb-4">{testimonial.role}</p>

                            {/* Stars rating - Array of filled star images based on the rating */}
                            <div className="flex mb-4">
                                {Array(testimonial.stars).fill().map((item, index) => (
                                    <img key={index} src={assets.rating_star} alt="" />
                                ))}
                            </div>

                            {/* The testimonial text provided by the user */}
                            <p className="text-center text-sm text-gray-600">{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Testimonials
