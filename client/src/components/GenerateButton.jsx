// Importing assets for use in the component
import { assets } from "../assets/assets";

// GenerateButton component to render a button with a heading and image
const GenerateButton = () => {
    return (
        <div className="pb-16 text-center">
            {/* Heading section with responsive font size and padding */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">
                See the magic. Try now
            </h1>

            {/* Button to trigger image generation with hover effect and icon */}
            <button className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500">
                {/* Button text */}
                Generate Images

                {/* Image icon inside the button */}
                <img src={assets.star_group} alt="" className="h-6" />
            </button>
        </div>
    )
}

export default GenerateButton;
