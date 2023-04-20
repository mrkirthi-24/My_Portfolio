import React from "react";
import connectify from "../assets/portfolio/Connectify.png";
import keeper from "../assets/portfolio/keeper.jpg";
import disneyhotstar from "../assets/portfolio/disneyhotstar.jpg";
import crypto from "../assets/portfolio/crypto.png";
import secureshare from "../assets/portfolio/Secureshare.png";
import simongame from "../assets/portfolio/simongame.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: crypto,
      demo: "",
      code: "https://github.com/mrkirthi-24/CoinWatch-crypto-tracker",
    },
    {
      id: 2,
      src: connectify,
      demo: "",
      code: "https://github.com/mrkirthi-24/Connectify_App",
    },
    {
      id: 3,
      src: secureshare,
      demo: "",
      code: "https://github.com/mrkirthi-24/SecureShare",
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
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
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
