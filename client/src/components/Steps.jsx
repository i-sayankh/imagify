import { motion } from "motion/react"; // Importing motion for animations
import { stepsData } from "../assets/assets"

// Steps component to display how the process works
const Steps = () => {
  return (
    // Animated container for the header section
    <motion.div
      initial={{ opacity: 0.2, y: 100 }} // Initial animation state
      transition={{ duration: 1 }} // Duration of the animation
      whileInView={{ opacity: 1, y: 0 }} // Animation state when the element is in view
      viewport={{ once: true }} // Run animation only once
      className="flex flex-col items-center justify-center my-32"
    >
      {/* Heading for the section */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">How it works</h1>

      {/* Subheading description */}
      <p className="text-lg text-gray-600 mb-8">Transform Words Into Stunning Images</p>

      {/* Container for steps with some spacing and max-width */}
      <div className="space-y-4 w-full max-w-3xl text-sm">
        {/* Loop through each step in stepsData */}
        {stepsData.map((item, index) => (
          <div
            className="flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg"
            key={index}
          >
            {/* Icon for the step */}
            <img width={40} src={item.icon} alt="" />

            <div>
              {/* Title of the step */}
              <h2 className="text-xl font-medium">{item.title}</h2>

              {/* Description of the step */}
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
