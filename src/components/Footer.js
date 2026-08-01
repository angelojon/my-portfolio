/**
 * Footer. Year is computed at render — the old hardcoded 2024 made the site
 * look abandoned. Social links are not duplicated here; they belong to the
 * links row in Contact.
 */
export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6 lg:px-8">
      <p className="text-body-sm">
        © {new Date().getFullYear()} Jon Angelo Macaldo
      </p>
    </footer>
  );
}
