
const About = () => {
  return (
    <div className="flex flex-col items-center px-6 py-16 bg-gray-100 min-h-fit">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-4 flex flex-col items-center justify-center">
            <img
              src="https://i.ibb.co/J2xTmr1/depositphotos-53128333-stock-photo-about-me-sign.jpg" // Replace with your image URL
              alt="Profile"
              className="w-full rounded-md"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <p className="text-lg text-gray-600">
              I am a frontend developer from Bangladesh, fueled by an insatiable passion for creating websites. I bring a unique blend of vision and technical prowess to every project. My goal is to exceed expectations, sculpting visually striking and responsive websites that leave a lasting impression on users. Let my skills and expertise help you in the journey of turning concepts into captivating digital realities.
            </p>
            <div className="mt-6">
              <div className="flex space-x-24">
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">NAME:</span>
                <span className="ml-2 text-gray-800">Shihab Shown</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">EMAIL:</span>
                <span className="ml-2 text-gray-800">sadadrana@gmail.com</span>
              </div>
              </div>
              <div className="flex space-x-4">
              <div className="flex items-center mt-2">
                <span className="text-gray-600 font-semibold">EDUCATION:</span>
                <span className="ml-2 text-gray-800">bachelor in Computer Science</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-gray-600 font-semibold">EMPLOYMENT:</span>
                <span className="ml-2 text-gray-800">Open to Work</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About