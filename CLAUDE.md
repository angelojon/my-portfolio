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

## Quality floor — non-negotiable, don't announce it, just do it

- Responsive down to 375px width. Check mobile at every step.
- Visible keyboard focus states on every interactive element.
- `prefers-reduced-motion` respected on any animation.
- Semantic HTML. Real headings in order, real landmarks, alt text on images.
- Colour contrast at WCAG AA minimum.
- No layout shift on load.

## Design direction

TO BE FILLED IN — we're deciding this now. Once decided, this section should
contain the palette as named hex values, the typeface pairing and type scale,
the layout concept, and the one signature element the page is remembered for.
Every colour and type decision in the code should trace back to here.

## Known issues to fix along the way

- Footer says © 2024. Make it dynamic.
- Page title is "angelo-portfolio", meta description is "minimalistic portfolio".
  Both need rewriting. Add OG tags and an OG image — the LinkedIn preview card
  matters more than almost anything else on this list.
- README is still create-next-app boilerplate. Repo is public and linked.
- Repo "About" links to the wrong Vercel URL.
- No resume download anywhere on the site.
- No nav — it's a long scroll with no way to jump to sections.