import Navbar from "@/components/site/navbar";
import Hero from "@/components/site/hero";
import Values from "@/components/site/values";
import Services from "@/components/site/services";
import About from "@/components/site/about";
import Process from "@/components/site/process";
import Consultations from "@/components/site/consultations";
import Resources from "@/components/site/resources";
import Contact from "@/components/site/contact";
import Footer from "@/components/site/footer";

export default function Page() {
  return (
    <>
      {/* <Navbar /> Moved inside Hero for custom scroll effect */}
      <main>
        <Hero />
        <Values />
        <Services />
        <Process />
        <Consultations />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </>
  );
}