/**
 * About — centred heading and paragraph, generous vertical space, ~60ch measure.
 * Heading is verbatim from copy.md; the lead and body land in the copy pass.
 */
export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto flex min-h-[50vh] w-full max-w-5xl flex-col justify-center border border-dashed border-sage/40 px-4 py-24 md:px-6 lg:px-8"
    >
      <h2 id="about-heading" className="font-serif text-display-md">
        About
      </h2>
    </section>
  );
}
