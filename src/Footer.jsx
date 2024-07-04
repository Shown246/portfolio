import { FaGithub,FaLinkedin,FaFacebook  } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl text-center font-bold">Shihab Shown</h3>
            <p className="text-gray-400 text-center">Junior Frontend Developer</p>
          </div>
          <div className="flex space-x-4 my-8">
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30}/>
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30}/>
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook  size={30}/>
            </a>
          </div>
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer