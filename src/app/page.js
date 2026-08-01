import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// No "use client" here — this page is composition only. Nav and Hero will opt
// into the client individually when they need interaction.
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
