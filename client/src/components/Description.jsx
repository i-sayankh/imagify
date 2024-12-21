import { motion } from "motion/react"; // Importing motion for animations
import { assets } from "../assets/assets"

const Description = () => {
    return (
        // Main container for the description section with padding and centering
        <motion.div
            initial={{ opacity: 0.2, y: 100 }} // Initial animation state
            transition={{ duration: 1 }} // Duration of the animation
            whileInView={{ opacity: 1, y: 0 }} // Animation state when the element is in view
            viewport={{ once: true }} // Run animation only once
            className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
        >

            {/* Header for the title */}
            <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Create AI Images</h1>

            {/* Subtext describing the purpose of the tool */}
            <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>

            {/* Flex container for the image and text content */}
            <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">

                {/* Image showcasing an example of the AI-generated images */}
                <img src={assets.sample_img_1} alt="AI-generated example" className="w-80 xl:w-96 rounded-lg" />

                {/* Text content explaining the AI-powered tool */}
                <div>

                    {/* Subheading introducing the AI text-to-image generator */}
                    <h2 className="text-3xl font-medium max-w-lg mb-4">Introducing the AI-Powered Text to Image Generator</h2>

                    {/* Paragraph explaining the tool and its functionality */}
                    <p className="text-gray-600 mb-4">
                        Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery,
                        our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come
                        to life instantly.
                    </p>

                    {/* Additional paragraph emphasizing the ease of use and creative possibilities */}
                    <p className="text-gray-600">
                        Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product
                        visuals to character designs and portraits, even concepts that don&apos;t yet exist can be visualized effortlessly.
                        Powered by advanced AI technology, the creative possibilities are limitless!
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Description
