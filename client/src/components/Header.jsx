import { assets } from "../assets/assets" // Importing assets for images and icons

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center my-20">
            {/* Section for tagline with a bordered badge */}
            <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500">
                <p>Best Text to Image Generator</p>
                <img src={assets.star_icon} alt="Star Icon" /> {/* Displaying a star icon */}
            </div>

            {/* Main heading */}
            <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
                Turn Text to <span className="text-blue-600">Image</span>, in seconds.
            </h1>

            {/* Subheading description */}
            <p className="text-center max-w-xl mx-auto mt-5">
                Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.
            </p>

            {/* Button for generating images */}
            <button className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full">
                Generate Images
                <img className="h-6" src={assets.star_group} alt="Star Group Icon" /> {/* Button icon */}
            </button>

            {/* Section for sample generated images */}
            <div className="flex flex-wrap justify-center mt-16 gap-3">
                {Array(6).fill('').map((item, index) => (
                    <img
                        className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
                        src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2} // Alternate between two sample images
                        alt={`Sample Image ${index + 1}`} // Unique alt text for each image
                        key={index}
                        width={70} // Fixed width for images
                    />
                ))}
            </div>

            {/* Footer text */}
            <p className="mt-2 text-neutral-600">Generated images from Imagify</p>
        </div>
    )
}

export default Header // Exporting the Header component for reuse
