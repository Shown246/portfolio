import { FaDownload } from "react-icons/fa6";
const Home = () => {
  return (
    <div className="bg-slate-700">
      <div className="container90 mx-auto">
        <div className="flex justify-around items-center">
          <div className="w-1/2 pl-8">
            <h1 className="text-2xl text-white mb-4">Hello, I&apos;m</h1>
            <p className="text-white text-6xl mb-4">
              Shihab <span className="text-blue-600">Shown</span>
            </p>
            <p className="text-white text-2xl mb-10">
              A <span className="text-2xl font-semibold">Web Developer</span>
            </p>
            <button className="bg-blue-600 hover:scale-125 duration-300 text-white font-semibold text-xl rounded-md py-2 px-4">
              <a
                href="./Resume.pdf"
                download="Resume.pdf"
                className="flex items-center gap-2"
              >
                <FaDownload />
                Résumé
              </a>
            </button>
          </div>
          <div className="w-1/2">
            <img
              src="https://i.ibb.co/Bq1Bk6b/IMG-3002.jpg"
              alt="placeholder"
              className="scale-75 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
