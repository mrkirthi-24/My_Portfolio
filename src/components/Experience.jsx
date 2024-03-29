import React from "react";

import nodejs from "../assets/nodejs.png";
import express from "../assets/Expressjs.png";
import nextjs from "../assets/nextjs.png";
import trpc from "../assets/trpc.svg";
import tailwind from "../assets/tailwind.png";
import docker from "../assets/docker.webp";
import mui from "../assets/mui.png";
import postgresql from "../assets/postgresql.png";
import mongodb from "../assets/mongodb.png";
import turbo from "../assets/turbo.png";
import django from "../assets/django.png";
import zod from "../assets/zod.png";

const Experience = () => {
  const techs = [
    {
      id: 3,
      src: nextjs,
      title: "NextJS",
      style: "shadow-pink-500",
    },
    {
      id: 4,
      src: express,
      title: "ExpressJS",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 99,
      src: django,
      title: "Django",
      style: "shadow-green-500",
    },
    {
      id: 15,
      src: trpc,
      title: "tRPC",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: docker,
      title: "Docker",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: postgresql,
      title: "PostgreSQL",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: turbo,
      title: "TurboRepo / Monorepo",
      style: "shadow-blue-500",
    },
    {
      id: 11,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-500",
    },
    {
      id: 12,
      src: mui,
      title: "Material-UI",
      style: "shadow-sky-400",
    },
    {
      id: 14,
      src: zod,
      title: "Zod",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black pb-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white text-center sm:text-left">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt=""
                className="w-20 h-20 mx-auto rounded-full"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
