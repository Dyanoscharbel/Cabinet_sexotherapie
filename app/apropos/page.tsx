import About from "@/components/site/about";
import Footer from "@/components/site/footer";
import Navbar from "@/components/site/navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <About />
      </main>
      <Footer />
    </>
  );
}
