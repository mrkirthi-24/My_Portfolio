import React from "react";
import HeroImage from "../assets/hero03.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center h-full px-4 md:flex-row sm:flex-col justify-between">
        <div className="flex flex-col justify-start sm:justify-center h-full text-center sm:text-left">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I am a</h2>
          <div className="text-white">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                "Full Stack Developer",
                1000,
                "Open source contributor",
                1000,
                "Web3 & AI enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "2em",
                display: "inline-block",
                marginBottom: "1em",
              }}
              repeat={Infinity}
            />
          </div>
          <p className="text-gray-500 py-4 max-w-md text-center sm:text-left text-sm sm:text-lg">
            NextJS • ExpressJS • MongoDB • PostgreSQL TailwindCSS • Docker
          </p>

          <div className="flex justify-center sm:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="-mt-0.5 group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full sm:rounded-2xl mx-auto w-2/3 md:w-full mt-10 sm:mt-0 mb-10 sm:mb-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
