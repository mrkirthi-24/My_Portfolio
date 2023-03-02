import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          As a Full Stack Developer, I have transitioned from a career in
          Business Development and possess a strong foundation in computer
          science and programming. My experience has equipped me with valuable
          skills in communication, problem-solving, and building relationships
          that will benefit me in a software development role.
        </p>

        <br />

        <p className="text-xl">
          Through self-study and hands-on experience, I have gained a strong
          foundation in software engineering, data structures, algorithms, and
          web development.I am committed to continuous learning and staying up
          to date with the latest industry trends and best practices. As a team
          player, I enjoy collaborating with other developers and stakeholders
          and have excellent communication skills that enable me to explain
          technical concepts to non-technical stakeholders.
        </p>

        <br />

        <p className="text-xl">
          Outside of work, I enjoy attending tech events, participate in online
          forums, and keep up with the latest industry trends. I am enthusiastic
          about starting their career as a Full Stack Developer and look forward
          to contributing my skills and knowledge to exciting new projects.
        </p>
      </div>
    </div>
  );
};

export default About;
