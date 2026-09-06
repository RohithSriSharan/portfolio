import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import About from  "@/components/About";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe"
import Edu_Exp from "@/components/Edu_Exp"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <About />
      <Edu_Exp />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  );
}
