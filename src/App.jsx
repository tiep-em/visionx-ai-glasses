import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Specs from "./components/Specs";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks/>
      <Specs />
      <Gallery />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;