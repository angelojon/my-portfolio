import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function MyPortfolio() {
  return (
    <main className="mt-32 mx-auto w-full max-w-2xl md:max-w-2xl lg:max-w-5xl  px-4 md:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row">
        {/* Left column for information */}
        <div className="mt-8 md:mt-12 lg:mt-24 md:ml-12 h-auto lg:h-[500px] w-full md:w-[450px] lg:w-[600px]">
          <h1 className="text-5xl lg:text-6xl font-semibold opacity-90 mb-8">
            Jon Angelo
          </h1>
          <div className="text-3xl lg:text-4xl opacity-80 mb-4">
            <h3>Front-end Developer</h3>
            <h3>UI/UX Designer</h3>
          </div>
          <p className="text-lg lg:text-xl opacity-70 mb-8">
            An Information Technology graduate passionate about designing
            high-quality, responsive user interfaces that deliver exceptional
            user experiences.
          </p>
          <p className="text-xl lg:text-2xl font-medium opacity-70 mb-8">
            Bringing visions to the web.
          </p>
          <div className="flex space-x-6 mt-4">
            <a
              href="mailto:your-email@gmail.com"
              className="text-3xl text-gray-700 hover:text-gray-900"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/your-github"
              className="text-3xl text-gray-700 hover:text-gray-900"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              className="text-3xl text-gray-700 hover:text-gray-900"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right column for vector art */}
        <div className="hidden lg:flex justify-center mt-12 md:mt-0 lg:mt-0 mx-auto md:mx-0 lg:mr-20 lg:px-[-30px] mb-12">
          <img
            src="/images/landing.png"
            alt="Vector Art"
            className="object-cover object-center h-[400px] md:h-[550px] lg:h-[600px] xl:h-[600px]  w-[400px] md:w-[550px] lg:w-[600px] xl:w-[600px] z-10"
          />
        </div>
      </div>
      {/* Experience section */}
      <section className=" h-screen content-center m-auto w-full px-4 md:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <hr className="border-t-1 border-black opacity-70 w-96 min-w-[150px] mr-4 md:mr-8 lg:mr-12 xl:mr-52 " />
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold opacity-90 ml-4">
            Experience
          </h2>
        </div>
        <div className="space-y-8 max-w-sm justify-start lg:mr-80">
          <div>
            <h3 className="text-sm md:text-lg lg:text-lg font-semibold opacity-80">
              Software Engineer Intern at Matchmo
            </h3>
            <p className="text-xs md:text-sm lg:text-md opacity-70">
              Jan 2024 - April 2024
            </p>
            <p className="text-xs lg:text-sm opacity-70 mt-2">
              Assisted in designing Matchmo's mobile app with Figma, enhanced
              their CRM using JavaScript, and ensured quality through testing.
            </p>
          </div>
          <div>
            <h3 className="text-sm md:text-lg lg:text-lg font-semibold opacity-80">
              Web developer for Capstone Project
            </h3>
            <p className="text-xs md:text-sm lg:text-md opacity-70">2023</p>
            <p className="text-xs lg:text-sm opacity-70 mt-2">
              Developed an e-commerce web application for M.A.M. Bicycle Shop,
              leading the front-end development and implementing a bike
              customization feature. Utilized MS SQL for proper database
              storage.
            </p>
          </div>
        </div>
      </section>
      {/* Projects section */}
      <section className=" h-screen content-center  mx-auto w-full  px-4 md:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <hr className="border-t-1 border-black opacity-70 w-96 min-w-[150px] mr-4 md:mr-8 lg:mr-24 xl:mr-52 " />
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold opacity-90 ml-4">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 max-w-sm">
          <a
            href="/projects/project1"
            className="block p-6 bg-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg lg:text-xl font-medium opacity-80">
              Project 1 Title
            </h3>
          </a>
          <a
            href="/projects/project2"
            className="block p-6 bg-gray-200  rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg lg:text-xl font-medium opacity-80">
              Project 2 Title
            </h3>
          </a>
          <a
            href="/projects/project3"
            className="block p-6 bg-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg lg:text-xl font-medium opacity-80">
              Project 3 Title
            </h3>
          </a>
          <a
            href="/projects/project4"
            className="block p-6 bg-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg lg:text-xl font-medium opacity-80">
              Project 4 Title
            </h3>
          </a>
        </div>
      </section>

      {/* Tools section */}
      <section className="h-screen content-center mx-auto w-full px-4 md:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <hr className="border-t-1 border-black opacity-70 w-96 min-w-[150px] mr-4 md:mr-8 lg:mr-12 xl:mr-52" />
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold opacity-90 ml-4">
            Tools
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 max-w-sm  gap-y-8 sm:gap-x-6 sm:gap-y-10 md:gap-x-8 md:gap-y-12 lg:gap-x-12 lg:gap-y-16">
          <div className="flex flex-col items-center">
            <FaReact className="text-black hover:text-blue-500 text-6xl transition-colors duration-300" />
            <p className="mt-2 text-sm font-medium opacity-80">React</p>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-black hover:text-blue-400 text-6xl transition-colors duration-300" />
            <p className="mt-2 text-sm font-medium opacity-80">TailwindCSS</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-black hover:text-orange-500 text-6xl transition-colors duration-300" />
            <p className="mt-2 text-sm font-medium opacity-80">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <FaJsSquare className="text-black hover:text-yellow-500 text-6xl transition-colors duration-300" />
            <p className="mt-2 text-sm font-medium opacity-80">JavaScript</p>
          </div>
        </div>
      </section>
    </main>
  );
}
