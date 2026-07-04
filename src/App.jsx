import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import Specifications from "./components/Specifications";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Specifications />
        <Gallery />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}

export default App;
