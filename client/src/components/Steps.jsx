import { stepsData } from "../assets/assets"

// Steps component to display how the process works
const Steps = () => {
  return (
    <div className="flex flex-col items-center justify-center my-32">
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
    </div>
  )
}

export default Steps
