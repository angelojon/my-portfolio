/**
 * PARKED — not rendered anywhere.
 *
 * Moved verbatim out of src/app/page.js during the structure pass. Kept because
 * CLAUDE.md still lists the Kynection end date as an open issue, so this content
 * may come back. Not restyled, not rewritten.
 *
 * Known issue if it returns: "September 2024 - Present" is wrong — that role has
 * ended and needs a real end date.
 */
export default function Experience() {
  return (
    <section className="min-h-screen content-center mx-auto mb-24 sm:mb-24 w-full  md:px-6 lg:px-8">
      <div>
        {/* Experience Column */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold opacity-90 mb-6 md:mb-8">
            Experience
          </h2>
          <div className="space-y-6 md:space-y-8 pr-8 md:pr-16">
            <div>
              <h3 className="text-md md:text-lg lg:text-lg font-semibold opacity-80">
                Software and Support Developer at Kynection
              </h3>
              <p className="text-sm md:text-md lg:text-md opacity-70">
                September 2024 - Present
              </p>
              <p className="text-sm  opacity-70 mt-2">
                Provide technical support and ensure smooth system operations through application deployment, troubleshooting, and issue resolution. Contribute to testing, QA, and GitHub workflows while maintaining technical documentation and training materials. Collaborate with developers to improve system functionality and user experience using the Upvise framework, web technologies (HTML, CSS, JavaScript), and support tools such as Zendesk.
              </p>
            </div>
            <div>
              <h3 className="text-md md:text-lg lg:text-lg font-semibold opacity-80">
                Freelance Web Developer for AMV Events &amp; Management
              </h3>
              <p className="text-sm md:text-md lg:text-md opacity-70">
                May - August 2024
              </p>
              <p className="text-sm  opacity-70 mt-2">
                Designed and developed an event management website that
                followed a structured process including wireframing,
                prototyping, and development.
              </p>
            </div>
            <div>
              <h3 className="text-md md:text-lg lg:text-lg font-semibold opacity-80">
                Software Engineer Intern at Matchmo
              </h3>
              <p className="text-sm md:text-md lg:text-md opacity-70">
                Jan - April 2024
              </p>
              <p className="text-sm  opacity-70 mt-2">
                Assisted in designing Matchmo&apos;s mobile app with Figma,
                enhanced their CRM using JavaScript, and ensured quality
                through testing.
              </p>
            </div>
            <div>
              <h3 className="text-md md:text-lg lg:text-lg font-semibold opacity-80">
                Capstone Project Web Developer
              </h3>
              <p className="text-sm md:text-md lg:text-md opacity-70">
                Feb - Nov 2023
              </p>
              <p className="text-sm  opacity-70 mt-2">
                Developed an e-commerce web application for M.A.M. Bicycle
                Shop, leading the front-end development and implementing a
                bike customization feature. Utilized MS SQL for proper
                database storage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
