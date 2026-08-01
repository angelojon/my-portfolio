import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Instrument Serif is a static font: weight 400 only. Both styles are requested
// explicitly because the roman-to-italic switch is the hero interaction — if the
// italic isn't loaded the browser fakes it with a slant, which is not the effect.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

export const metadata = {
  title: "angelo-portfolio",
  description: "minimalistic portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
