/**
 * PARKED — not rendered anywhere.
 *
 * The original hero block, moved verbatim out of src/app/page.js during the
 * structure pass. Kept for reference until its parts have new homes: the social
 * icon row becomes the links row in Contact, and the image slot becomes the
 * portrait in Hero.
 *
 * The copy here breaks the rules in CLAUDE.md ("Passionate", "high-quality",
 * "exceptional user experiences", "BRINGING VISIONS TO THE WEB"). It is kept
 * unchanged on purpose — this file is a record, not a draft. Nothing here should
 * be copied forward.
 */
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function OldHero() {
  return (
    <div className=" my-24 sm:mb-24 flex flex-col md:flex-row">
      {/* Left column for information */}
      <div className=" mt-8 md:mt-12 lg:mt-24 md:ml-12 h-auto lg:h-[500px] w-full md:w-[450px] lg:w-[600px]">
        <h1 className="text-5xl lg:text-6xl font-bold opacity-90 mb-8">
          JON ANGELO
        </h1>
        <div className="text-3xl lg:text-4xl font-semibold opacity-80 mb-4">
          <h3>Front-end Developer</h3>
          <h3>UI/UX Designer</h3>
        </div>
        <p className="text-lg lg:text-xl opacity-70 mb-8">
          Passionate in designing high-quality, responsive user interfaces
          that deliver exceptional user experiences.
        </p>
        <p className="text-xl lg:text-2xl font-semibold opacity-70 mb-8">
          BRINGING VISIONS TO THE WEB.
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
  );
}
