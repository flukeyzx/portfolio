import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="">
      <div className="min-h-screen md:px-12">
        <Header />
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
