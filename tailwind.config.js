const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Paper and ink. These are the only colours in the project.
      colors: {
        ink: "#101A14",
        bottle: "#1B3A2C",
        sage: "#7A8F7F",
        linen: "#EDE7DA",
        sand: "#D8CDB8",
        brass: "#A5854D",
      },

      fontFamily: {
        // Body / UI
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        // Display / headings
        serif: ["var(--font-instrument-serif)", ...defaultTheme.fontFamily.serif],
      },

      // Display sizes are fluid: one clamp() each, no breakpoint overrides.
      // Line height tightens as size grows; tracking goes slightly negative so
      // large serif display type doesn't look loose.
      fontSize: {
        "display-2xl": [
          "clamp(3.25rem, 11vw, 8.5rem)",
          { lineHeight: "0.92", letterSpacing: "-0.02em" },
        ],
        "display-xl": [
          "clamp(2.75rem, 8.5vw, 6.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "clamp(2.25rem, 6vw, 4.5rem)",
          { lineHeight: "1", letterSpacing: "-0.015em" },
        ],
        "display-md": [
          "clamp(1.875rem, 4vw, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.01em" },
        ],
        "display-sm": [
          "clamp(1.5rem, 2.5vw, 2rem)",
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],

        // Body scale. Only the lead paragraph size is fluid.
        "body-lg": [
          "clamp(1.0625rem, 0.9vw + 0.85rem, 1.25rem)",
          { lineHeight: "1.6" },
        ],
        body: ["1rem", { lineHeight: "1.65" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],

        // Micro-label / eyebrow. Tracking is baked in.
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.14em" }],
      },

      letterSpacing: {
        eyebrow: "0.14em",
      },

      maxWidth: {
        // Reading measure for centred body copy.
        measure: "60ch",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
