/**
 * Contact — inverted palette (bottle ground, linen text). The inversion is the
 * only place green is the ground, so it's set up here rather than left to the
 * design pass.
 *
 * Heading is verbatim from copy.md. Email, status dot and links row follow.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-bottle text-linen"
    >
      <div className="mx-auto flex min-h-[60vh] w-full max-w-5xl flex-col justify-center px-4 py-24 md:px-6 lg:px-8">
        <h2 id="contact-heading" className="font-serif text-display-lg">
          Let&apos;s talk.
        </h2>
      </div>
    </section>
  );
}
