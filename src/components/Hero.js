/**
 * Hero — the signature section. Empty placeholder for now.
 *
 * The <h1> is a marker, not copy. It becomes the three role words (roman-to-
 * italic on hover, in-view on touch) in the hero pass. Keeping a real <h1> here
 * means heading order is correct from the start.
 */
export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col justify-center border border-dashed border-sage/40 px-4 py-24 md:px-6 lg:px-8"
    >
      <h1 id="hero-heading" className="font-serif text-display-lg text-sage">
        [ hero ]
      </h1>
    </section>
  );
}
