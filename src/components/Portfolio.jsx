import React from "react";
import linkedinclone from "../assets/portfolio/linkedinclone.jpg";
import keeper from "../assets/portfolio/keeper.jpg";
import disneyhotstar from "../assets/portfolio/disneyhotstar.jpg";
import crypto from "../assets/portfolio/crypto.jpg";
import portfolio from "../assets/portfolio/portfolio.jpg";
import simongame from "../assets/portfolio/simongame.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: linkedinclone,
      demo: "",
      code: "https://github.com/mrkirthi-24/LinkedIn-Clone",
    },
    {
      id: 2,
      src: crypto,
      demo: "",
      code: "https://github.com/mrkirthi-24/Crypto-Screener",
    },
    {
      id: 3,
      src: portfolio,
      demo: "",
      code: "https://github.com/mrkirthi-24/My_Portfolio",
    },
    {
      id: 4,
      src: disneyhotstar,
      demo: "",
      code: "https://github.com/mrkirthi-24/Disney-hotstar-Clone",
    },
    {
      id: 5,
      src: keeper,
      demo: "",
      code: "https://github.com/mrkirthi-24/KeeperApp-v01",
    },
    {
      id: 6,
      src: simongame,
      demo: "",
      code: "https://github.com/mrkirthi-24/Simon-Game-Challenge",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center sm:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
