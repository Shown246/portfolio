import { FaEye, FaCode } from "react-icons/fa6";
const Projects = () => {
  return (
    <div className="container90 my-10">
      <div className="mb-6">
        <p className="text-center text-4xl font-bold">Projects</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        <div className="relative group w-full h-full hover:scale-110 duration-300">
          <img
            src="https://i.ibb.co/D7gbr4g/Screenshot-2024-07-04-181352.png"
            alt="Project 1"
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-slate-700 bg-opacity-0 group-hover:bg-opacity-50 flex gap-4 justify-center items-center transition-opacity duration-500  rounded-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEye className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCode className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
        <div className="relative group w-full h-full hover:scale-110 duration-300">
          <img
            src="https://i.ibb.co/D7gbr4g/Screenshot-2024-07-04-181352.png"
            alt="Project 1"
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-slate-700 bg-opacity-0 group-hover:bg-opacity-50 flex gap-4 justify-center items-center transition-opacity duration-500  rounded-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEye className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCode className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
        <div className="relative group w-full h-full hover:scale-110 duration-300">
          <img
            src="https://i.ibb.co/D7gbr4g/Screenshot-2024-07-04-181352.png"
            alt="Project 1"
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-slate-700 bg-opacity-0 group-hover:bg-opacity-50 flex gap-4 justify-center items-center transition-opacity duration-500  rounded-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEye className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCode className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
