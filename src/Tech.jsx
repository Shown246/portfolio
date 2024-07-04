import { FaHtml5,FaReact  } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const Tech = () => {
  return (
    <div className="bg-slate-700">
      <div className="container90 p-6 flex justify-between">
        <div>
          <FaHtml5 color="white" size={88} />
          <p className="text-white text-center text-lg">HTML</p>
        </div>
        <div>
          <FaCss3Alt color="white" size={88} />
          <p className="text-white text-center text-lg">CSS</p>
        </div>
        <div>
          <IoLogoJavascript color="white" size={88} />
          <p className="text-white text-center text-lg">JavaScript</p>
        </div>
        <div>
          <FaReact  color="white" size={88} />
          <p className="text-white text-center text-lg">React</p>
        </div>
        <div>
          <RiTailwindCssFill  color="white" size={88} />
          <p className="text-white text-center text-lg">TailwindCSS</p>
        </div>
        <div>
          <SiExpress  color="white" size={88} />
          <p className="text-white text-center text-lg">Express</p>
        </div>
        <div>
          <SiMongodb  color="white" size={88} />
          <p className="text-white text-center text-lg">MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default Tech;
