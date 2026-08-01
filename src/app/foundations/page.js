import { TypeSpecimen, ViewportReadout } from "./Specimen";
import MotionCheck from "./MotionCheck";
import { contrastRatio, grade } from "./contrast";

export const metadata = {
  title: "Foundations",
  robots: { index: false, follow: false },
};

const PALETTE = [
  {
    token: "ink",
    hex: "#101A14",
    use: "Display type on beige",
    swatch: "bg-ink",
    label: "text-linen",
  },
  {
    token: "bottle",
    hex: "#1B3A2C",
    use: "Body text on beige. Ground of contact.",
    swatch: "bg-bottle",
    label: "text-linen",
  },
  {
    token: "sage",
    hex: "#7A8F7F",
    use: "Eyebrows, captions, hairlines",
    swatch: "bg-sage",
    label: "text-ink",
  },
  {
    token: "linen",
    hex: "#EDE7DA",
    use: "Page background. Ink on contact.",
    swatch: "bg-linen",
    label: "text-ink",
  },
  {
    token: "sand",
    hex: "#D8CDB8",
    use: "Raised surfaces, cards, fills",
    swatch: "bg-sand",
    label: "text-ink",
  },
  {
    token: "brass",
    hex: "#A5854D",
    use: "Rules, underlines, hover",
    swatch: "bg-brass",
    label: "text-ink",
  },
];

const PAIRS = [
  { fg: "ink", bg: "linen", note: "Display type on the page" },
  { fg: "bottle", bg: "linen", note: "Body copy on the page" },
  { fg: "sage", bg: "linen", note: "Eyebrows and captions" },
  { fg: "brass", bg: "linen", note: "Links, rules, status dot" },
  { fg: "ink", bg: "sand", note: "Type on cards" },
  { fg: "bottle", bg: "sand", note: "Body copy on cards" },
  { fg: "linen", bg: "bottle", note: "Contact section type" },
  { fg: "sage", bg: "bottle", note: "Contact section labels" },
  { fg: "brass", bg: "bottle", note: "Contact underline, status dot" },
];

const HEX = Object.fromEntries(PALETTE.map((c) => [c.token, c.hex]));

const DISPLAY_SCALE = [
  {
    token: "display-2xl",
    formula: "clamp(3.25rem, 11vw, 8.5rem)",
    className: "font-serif text-display-2xl text-ink",
    sample: "Let’s talk.",
  },
  {
    token: "display-xl",
    formula: "clamp(2.75rem, 8.5vw, 6.5rem)",
    className: "font-serif text-display-xl text-ink",
    sample: "Frontend Developer",
  },
  {
    token: "display-lg",
    formula: "clamp(2.25rem, 6vw, 4.5rem)",
    className: "font-serif text-display-lg text-ink",
    sample: "Featured work",
  },
  {
    token: "display-md",
    formula: "clamp(1.875rem, 4vw, 3rem)",
    className: "font-serif text-display-md text-ink",
    sample: "Jon Angelo Macaldo",
  },
  {
    token: "display-sm",
    formula: "clamp(1.5rem, 2.5vw, 2rem)",
    className: "font-serif text-display-sm text-ink",
    sample: "A project title",
  },
];

const BODY_SCALE = [
  {
    token: "body-lg",
    formula: "clamp(1.0625rem, 0.9vw + 0.85rem, 1.25rem)",
    className: "max-w-measure text-body-lg text-bottle",
    sample:
      "Lead paragraph. The measure is capped at 60ch so centred lines don’t run long, even on a wide screen.",
  },
  {
    token: "body",
    formula: "1rem / 1.65",
    className: "max-w-measure text-body text-bottle",
    sample:
      "Default body size. Inter, set on beige in bottle green rather than pure black, which keeps the paper-and-ink feel without dropping contrast.",
  },
  {
    token: "body-sm",
    formula: "0.875rem / 1.6",
    className: "max-w-measure text-body-sm text-bottle",
    sample:
      "Small print. Captions, meta rows, the quiet line of links under the contact heading.",
  },
];

function Section({ eyebrow, heading, children }) {
  return (
    <section className="border-t border-sage/30 py-16 sm:py-20">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="mb-10 font-serif text-display-md text-ink">{heading}</h2>
      {children}
    </section>
  );
}

export default function FoundationsPage() {
  return (
    <main className="min-h-screen bg-linen">
      <ViewportReadout />

      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <header className="py-16 sm:py-24">
          <p className="eyebrow mb-4">Foundations</p>
          <h1 className="mb-6 font-serif text-display-lg text-ink">
            Palette and type scale
          </h1>
          <div className="mb-6 h-px w-24 bg-brass" />
          <p className="max-w-measure text-body-lg text-bottle">
            A reference page, not a section of the site. Everything here reads
            from the tokens in{" "}
            <code className="text-body">tailwind.config.js</code>. Resize the
            window to watch the display sizes move between their clamp()
            endpoints.
          </p>
        </header>

        {/* ---------------------------------------------------------------- */}
        <Section eyebrow="One" heading="Colour">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PALETTE.map((colour) => (
              <li
                key={colour.token}
                className="overflow-hidden rounded-sm border border-sage/30"
              >
                <div
                  className={`flex h-28 items-end p-4 ${colour.swatch} ${colour.label}`}
                >
                  <span className="text-body-sm font-medium">
                    {colour.token}
                  </span>
                </div>
                <div className="bg-linen p-4">
                  <p className="mb-1 text-body-sm uppercase tracking-eyebrow text-bottle">
                    {colour.hex}
                  </p>
                  <p className="text-body-sm text-sage">{colour.use}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* ---------------------------------------------------------------- */}
        <Section eyebrow="Two" heading="Contrast">
          <p className="mb-8 max-w-measure text-body text-bottle">
            Measured, not assumed. AA needs 4.5:1 for body text and 3:1 for large
            text and non-text marks like rules and the status dot.
          </p>

          <ul className="divide-y divide-sage/30 border-y border-sage/30">
            {PAIRS.map((pair) => {
              const ratio = contrastRatio(HEX[pair.fg], HEX[pair.bg]);
              const result = grade(ratio);
              return (
                <li
                  key={`${pair.fg}-on-${pair.bg}`}
                  className="flex flex-wrap items-center gap-x-6 gap-y-2 py-4"
                >
                  <code className="w-56 shrink-0 text-body-sm text-bottle">
                    {pair.fg} on {pair.bg}
                  </code>
                  <span className="w-16 shrink-0 text-body-sm font-medium text-ink">
                    {ratio.toFixed(2)}
                  </span>
                  <span
                    className={
                      result.pass === true
                        ? "text-body-sm text-bottle"
                        : "text-body-sm font-semibold text-ink"
                    }
                  >
                    {result.pass === true ? result.label : `⚠ ${result.label}`}
                  </span>
                  <span className="text-body-sm text-sage">{pair.note}</span>
                </li>
              );
            })}
          </ul>
        </Section>

        {/* ---------------------------------------------------------------- */}
        <Section eyebrow="Three" heading="Display scale">
          <div>
            {DISPLAY_SCALE.map((step) => (
              <TypeSpecimen
                key={step.token}
                token={step.token}
                formula={step.formula}
                className={step.className}
              >
                {step.sample}
              </TypeSpecimen>
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------------------- */}
        <Section eyebrow="Four" heading="Roman and italic">
          <p className="mb-8 max-w-measure text-body text-bottle">
            The check that matters: these two must look like different letterforms,
            not the same letters leaning over. If the italic is a slant, the font
            didn’t load and the hero interaction has nothing to work with.
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Roman</p>
              <p className="font-serif text-display-lg text-ink">Creative</p>
            </div>
            <div>
              <p className="eyebrow mb-4">Italic</p>
              <p className="font-serif text-display-lg italic text-ink">
                Creative
              </p>
            </div>
          </div>
        </Section>

        {/* ---------------------------------------------------------------- */}
        <Section eyebrow="Five" heading="Body and labels">
          <div className="mb-10">
            {BODY_SCALE.map((step) => (
              <TypeSpecimen
                key={step.token}
                token={step.token}
                formula={step.formula}
                className={step.className}
              >
                {step.sample}
              </TypeSpecimen>
            ))}
          </div>

          <div className="border-t border-sage/30 py-6">
            <div className="mb-3 flex flex-wrap items-baseline gap-x-4">
              <code className="text-body-sm text-bottle">.eyebrow</code>
              <code className="text-body-sm text-sage">
                Inter, 0.75rem, uppercase, 0.14em, sage
              </code>
            </div>
            <p className="eyebrow">Selected work</p>
          </div>
        </Section>

        {/* ---------------------------------------------------------------- */}
        <Section eyebrow="Six" heading="Reduced motion">
          <MotionCheck />
        </Section>

        {/* ---------------------------------------------------------------- */}
        <Section eyebrow="Seven" heading="Inverted">
          <p className="mb-8 max-w-measure text-body text-bottle">
            The contact section flips the palette. Same tokens, ground and figure
            swapped.
          </p>
          <div className="rounded-sm bg-bottle p-8 sm:p-12">
            <p className="eyebrow mb-6 text-sage">Get in touch</p>
            <p className="mb-4 font-serif text-display-xl text-linen">
              Let’s talk.
            </p>
            <p className="mb-8 inline-block border-b border-brass pb-1 text-body-lg text-linen">
              hello@example.com
            </p>
            <p className="flex items-center gap-3 text-body-sm text-sage">
              <span
                aria-hidden="true"
                className="inline-block h-2 w-2 rounded-full bg-brass"
              />
              Open to work
            </p>
          </div>
        </Section>

        <footer className="border-t border-sage/30 py-12">
          <p className="text-body-sm text-sage">
            Foundations only. No sections built yet.
          </p>
        </footer>
      </div>
    </main>
  );
}
