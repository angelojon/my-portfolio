import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function MyPortfolio() {
  return (
    <main className=" mt-32 mx-auto w-full max-w-2xl md:max-w-2xl lg:max-w-5xl  px-4 md:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row">
        {/* Left column for information */}
        <div className="mt-8 md:mt-12 lg:mt-24 md:ml-12 h-auto lg:h-[500px] w-full md:w-[450px] lg:w-[600px]">
          <h1 className="text-5xl lg:text-6xl font-semibold opacity-90 mb-8">
            JON ANGELO
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
              href="mailto:macaldo.jonangelo@gmail.com"
              className="text-3xl text-gray-700 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/angelojon"
              className="text-3xl text-gray-700 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jon-angelo-macaldo-2aa87b276/"
              className="text-3xl text-gray-700 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
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

      {/* Experience and Tools section */}
      <section className="min-h-screen content-center mx-auto w-full  md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Experience Column */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold opacity-90 mb-6 md:mb-8">
              Experience
            </h2>
            <div className="space-y-6 md:space-y-8 pr-8 md:pr-16">
              <div>
                <h3 className="text-md md:text-lg lg:text-lg font-semibold opacity-80">
                  Software Engineer Intern at Matchmo
                </h3>
                <p className="text-sm md:text-md lg:text-md opacity-70">
                  Jan 2024 - April 2024
                </p>
                <p className="text-sm  opacity-70 mt-2">
                  Assisted in designing Matchmo&apos;s mobile app with Figma,
                  enhanced their CRM using JavaScript, and ensured quality
                  through testing.
                </p>
              </div>
              <div>
                <h3 className="text-md md:text-lg lg:text-lg font-semibold opacity-80">
                  Web developer for Capstone Project
                </h3>
                <p className="text-sm md:text-md lg:text-md opacity-70">2023</p>
                <p className="text-sm  opacity-70 mt-2">
                  Developed an e-commerce web application for M.A.M. Bicycle
                  Shop, leading the front-end development and implementing a
                  bike customization feature. Utilized MS SQL for proper
                  database storage.
                </p>
              </div>
            </div>
          </div>

          {/* Tools Column */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold opacity-90 mb-6 md:mb-8">
              Tools
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-4 gap-6 md:gap-8 max-w-xs sm:max-w-sm">
              <div className="flex flex-col items-center">
                <FaReact className="text-black hover:text-blue-500 text-4xl md:text-5xl lg:text-6xl transition-colors duration-300" />
                <p className="mt-2 text-xs md:text-sm font-medium opacity-80">
                  React
                </p>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-black hover:text-blue-400 text-4xl md:text-5xl lg:text-6xl transition-colors duration-300" />
                <p className="mt-2 text-xs md:text-sm font-medium opacity-80">
                  TailwindCSS
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-black hover:text-orange-500 text-4xl md:text-5xl lg:text-6xl transition-colors duration-300" />
                <p className="mt-2 text-xs md:text-sm font-medium opacity-80">
                  HTML
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FaJsSquare className="text-black hover:text-yellow-500 text-4xl md:text-5xl lg:text-6xl transition-colors duration-300" />
                <p className="mt-2 text-xs md:text-sm font-medium opacity-80">
                  JavaScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section className="h-screen content-center mx-auto w-full md:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <hr className="border-t-1 border-black opacity-70 w-96 min-w-[150px] mr-4 md:mr-8 lg:mr-24 xl:mr-52" />
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold opacity-90 ml-auto">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4x">
          <a
            href="https://drive.google.com/file/d/1tq-cxJmOb45UGIhQw8aaYjfzMNTM8S4I/view?usp=sharing"
            className="relative block p-6 bg-gray-100 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-sm lg:text-sm font-semibold opacity-80 mb-4 text-right">
              M.A.M. Bicycle Shop
            </h3>
            <img
              src="/images/proj1.png"
              alt="Project 1"
              className="w-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-center px-4">
                Developed an e-commerce platform for M.A.M. Bicycle Shop with a
                custom bike configuration feature for our Capstone Project.
              </p>
            </div>
          </a>
          <a
            href="https://www.figma.com/design/2YLPsj1xAilFMb74gsRmbg/House-Loan%2FMortgage-App?node-id=0-1&t=ZvEZLlzGIrobJZiL-1"
            className="relative block p-6 bg-gray-100 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-sm lg:text-sm font-semibold opacity-80 mb-4 text-right">
              Home Loan Mobile App
            </h3>
            <img
              src="/images/proj2.jpg"
              alt="Project 2"
              className="w-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-center px-4">
                During my internship, I designed a user-friendly mobile app for
                processing and tracking home loans.
              </p>
            </div>
          </a>
          <a
            href="https://my-portfolio-angelo.vercel.app/"
            className="relative block p-6 bg-gray-100 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-sm lg:text-sm font-semibold opacity-80 mb-4 text-right">
              My Website
            </h3>
            <img
              src="/images/proj3.png"
              alt="Project 3"
              className="w-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-center px-4">
                A minimalistic showcase of my skills in developing responsive
                and user-friendly designs.
              </p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
