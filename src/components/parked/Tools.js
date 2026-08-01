/**
 * PARKED — not rendered anywhere.
 *
 * Moved verbatim out of src/app/page.js during the structure pass. The new
 * design has no Tools section; kept in case it comes back. Not restyled.
 *
 * Along with parked/OldHero.js, this is one of the last two consumers of
 * react-icons. If both stay parked, the dependency can be dropped.
 */
import { FaReact, FaHtml5, FaCss3, FaJsSquare, FaFigma } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

export default function Tools() {
  return (
    <section className="min-h-screen mx-auto w-full md:px-6 lg:px-8 py-20">
      <div className="flex items-center mb-8">
        <hr className="border-t-1 border-black opacity-70 w-96 min-w-[150px] mr-4 md:mr-8 lg:mr-24 xl:mr-52" />
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold opacity-90 ml-auto">
          Tools
        </h2>
      </div>
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
          <FaCss3 className="text-black hover:text-blue-700 text-4xl md:text-5xl lg:text-6xl transition-colors duration-300" />
          <p className="mt-2 text-xs md:text-sm font-medium opacity-80">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-black hover:text-orange-500 text-4xl md:text-5xl lg:text-6xl transition-colors duration-300" />
          <p className="mt-2 text-xs md:text-sm font-medium opacity-80">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <FaJsSquare className="text-black hover:text-yellow-500 text-4xl md:text-5xl lg:text-6xl transition-colors duration-300" />
          <p className="mt-2 text-xs md:text-sm font-medium opacity-80">
            JavaScript
          </p>
        </div>
        <div className="flex flex-col items-center">
          <RiNextjsFill
            className="text-black hover:text-black text-4xl md:text-5xl
                lg:text-6xl transition-colors duration-300"
          />
          <p className="mt-2 text-xs md:text-sm font-medium opacity-80">
            NextJS
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaFigma className="text-black hover:text-violet-600 text-4xl md:text-5xl lg:text-6xl transition-colors duration-300" />
          <p className="mt-2 text-xs md:text-sm font-medium opacity-80">
            Figma
          </p>
        </div>
      </div>
    </section>
  );
}
