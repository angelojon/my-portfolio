# Portfolio — project context

## What this is

Personal portfolio site for Jon Angelo. Live at angelomac.vercel.app.

**Primary job of this site:** convince a hiring manager, in under 30 seconds,
that I'm worth an interview for a front-end / UI-UX role.

**Secondary, later:** attract freelance work at the intersection of design and AI.
Not a priority yet — do not design for it now, but avoid choices that would
make it awkward to add later.

**Audience:** hiring managers and recruiters, most of them skimming, roughly half
on mobile, arriving from a LinkedIn link.

## Stack

- Next.js (App Router, `src/app`)
- JavaScript — not TypeScript
- Tailwind CSS v3, config in `tailwind.config.js`
- Deployed on Vercel free tier, auto-deploys from `main`
- Branch previews are how I review changes before merging

## Current status

Site is functional but stale. Content is ~2 years old in places. We are
redesigning the look and feel and rewriting the copy.

## Working agreements

- **Ask before large refactors.** Explain what you want to restructure and why,
  and wait for me to agree. I'm learning this codebase again as we go.
- **Small, reviewable changes.** One concern at a time. I'd rather approve six
  small diffs than one enormous one.
- **Explain design decisions in one or two lines** as you make them. I want to
  understand the reasoning, not just receive the result.
- **Never commit or push without asking.** Never force-push. Never touch `main`
  directly.
- **When I describe a problem vaguely** ("this section feels cramped"), ask what
  specifically bothers me before changing code. Don't guess and rewrite.

## Out of scope right now

- **The Projects section.** I'm producing new projects to replace the current
  three. Leave the content alone. You may restructure its layout and styling to
  match the new design, but don't rewrite project copy or swap the links.

## Copy rules

The current copy is generic and I want it gone. Specifically:

- Banned words and phrases: "passionate", "high-quality", "exceptional user
  experiences", "bringing visions to life", "leveraging", "cutting-edge",
  "seamless", "innovative".
- Specific beats clever. Name real things I built and real problems I solved.
- Sentence case for UI, not Title Case. No ALL CAPS taglines.
- Active voice. A button says what happens when you press it.
- Short sentences. If a sentence could be cut without losing information, cut it.

All final site copy lives in `copy.md` in the project root. Use it verbatim
when building sections. Don't write new copy without asking me first.

## Quality floor — non-negotiable, don't announce it, just do it

- Responsive down to 375px width. Check mobile at every step.
- Visible keyboard focus states on every interactive element.
- `prefers-reduced-motion` respected on any animation.
- Semantic HTML. Real headings in order, real landmarks, alt text on images.
- Colour contrast at WCAG AA minimum.
- No layout shift on load.

## Design direction

Minimal, premium, classic. Paper and ink is the governing metaphor: beige is the
page, dark green is the ink, brass is the one flourish. Restraint everywhere
except one deliberate moment per section.

### Colour tokens

Define these in `tailwind.config.js` under `theme.extend.colors`. Never hardcode
a hex anywhere else in the codebase.

| Token    | Hex       | Use                                              |
|----------|-----------|--------------------------------------------------|
| `ink`    | `#101A14` | Display type on beige. Near-black, green cast.   |
| `bottle` | `#1B3A2C` | Body text on beige. Ground colour of contact.    |
| `sage`   | `#7A8F7F` | Eyebrows, captions, hairlines, muted labels.     |
| `linen`  | `#EDE7DA` | Page background. Ink on the contact section.     |
| `sand`   | `#D8CDB8` | Raised surfaces, cards, subtle fills.            |
| `brass`  | `#A5854D` | Accent. Rules, link underlines, hover states.    |

Brass appears on at most three things per viewport. It stops reading as premium
the moment it's everywhere.

### Typography

- Display / headings: **Instrument Serif**, via `next/font/google`
- Body / UI: **Inter**, via `next/font/google`
- Micro-labels and eyebrows: Inter, uppercase, `0.14em` letter-spacing, `sage`

Instrument Serif's italic is dramatically different from its roman — that
contrast is the basis of the hero interaction, so don't substitute a font whose
italic is just a slant.

All display sizes use `clamp()` for fluid scaling. No fixed px display type with
breakpoint overrides.

### Layout, section by section

**Nav** — sticky, minimal. `Jon Angelo Macaldo` set as the logo on the left, in
Instrument Serif. `About`, `Projects`, `Contact me` on the right. Hairline bottom
border in `sage` at low opacity. Collapses to a simple menu on mobile.

**Hero** — the signature moment.
- Desktop: three role words at very large display size, layered *behind* a
  centred portrait photo. Words are **static — no marquee, no horizontal
  scrolling.** The roles: `Frontend Developer`, `UI Designer`, `Creative`.
- Interaction: on hover, a role word switches from roman to italic. Fast
  transition, roughly 200ms.
- **On touch devices there is no hover.** Each word italicises when it scrolls
  into the viewport instead. Implement both paths — do not ship hover-only.
- Mobile: restructure, don't shrink. The three roles become stacked left-aligned
  lines with the photo below them. No background layering at small widths.
- Photo: use a neutral placeholder for now. A real portrait is coming.

**About** — centred. Both the heading and the paragraph below it. Generous
vertical space around it. Keep the measure to roughly 60 characters even though
it's centred, so lines don't run long.

**Featured work** — the heading is a plain section label, same treatment as
About. No sticky, no parallax: it scrolls away with its cards. Project
*content* is out of scope — layout and styling only.

**Contact** — inverted palette. `bottle` background, `linen` text. This is the
only section where green is the ground, and that inversion is deliberate: it
should feel like arriving somewhere.
- `Let's talk.` at the largest display size on the page.
- Email on the line below, large, with a `brass` underline that animates in on
  hover.
- Below that, a quiet row in small uppercase Inter: GitHub, LinkedIn, location,
  résumé download.
- An "open to work" status dot in `brass`.

### Motion

One orchestrated sequence beats scattered effects. Scattered fade-ins read as
templated.

- Page load: eyebrow, then name, then a brass rule drawing itself left to right,
  then body copy. About 900ms total.
- Scroll: subtle reveals only. Short distance, short duration.
- Hover: quiet. Underlines, the roman-to-italic switch, nothing that moves layout.
- Use `motion` (formerly framer-motion).
- `prefers-reduced-motion: reduce` must disable all of it. Non-negotiable.

### Signature element

The hero's roman-to-italic switch on the role words. That's the one thing the
page is remembered by. Everything around it stays quiet and disciplined — if
another element starts competing with it, cut the other element.

## Known issues to fix along the way

- Footer says © 2024. Make it dynamic.
- Page title is "angelo-portfolio", meta description is "minimalistic portfolio".
  Both need rewriting. Add OG tags and an OG image — the LinkedIn preview card
  matters more than almost anything else on this list.
- README is still create-next-app boilerplate. Repo is public and linked.
- Repo "About" links to the wrong Vercel URL.
- No resume download anywhere on the site.
- No nav — it's a long scroll with no way to jump to sections.
- Experience section still says "currently" at Kynection. I've left that role —
  needs an end date.
- "Open to work" status should appear high on the page, not only in contact.