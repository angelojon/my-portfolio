/**
 * Featured work — the heading sticks while the cards scroll past it.
 *
 * The sticky shape is set up here because it's structural, but the heading
 * offset and card styling belong to the design pass.
 *
 * Project content below is moved verbatim from the old src/app/page.js. New
 * projects are in production — do not rewrite the copy or swap the links.
 */
export default function FeaturedWork() {
  return (
    <section
      id="projects"
      aria-labelledby="featured-work-heading"
      className="mx-auto w-full max-w-5xl border border-dashed border-sage/40 px-4 py-24 md:px-6 lg:px-8"
    >
      <div className="sticky top-16 z-10 bg-linen py-2">
        <h2 id="featured-work-heading" className="font-serif text-display-md">
          Featured work
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
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
          href="https://www.amv-events.com/"
          className=" relative block p-6 bg-gray-100 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-sm lg:text-sm font-semibold opacity-80 mb-4 text-right">
            AMV Events Management
          </h3>
          <img
            src="/images/proj3.png"
            alt="Project 3"
            className="w-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <p className="text-white text-center px-4">
              Developed a single-page website for an event management business
              as a freelance work. It showcases responsiveness and bits of
              animations.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
