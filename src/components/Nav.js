/**
 * Sticky site nav. Structure only — styling lands with the design pass.
 *
 * TODO: mobile menu. The link list is hidden below `sm` for now rather than
 * shipping a bar that overflows at 375px.
 */
export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-sage/30 bg-linen">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8"
      >
        <a href="#top" className="font-serif text-xl">
          Jon Angelo Macaldo
        </a>

        <ul className="hidden items-center gap-6 sm:flex">
          <li>
            <a href="#about" className="text-body-sm">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-body-sm">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-body-sm">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
