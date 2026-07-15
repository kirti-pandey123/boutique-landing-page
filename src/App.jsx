import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CategoriesSection from "./components/Categories/Categories";
import Featured from "./components/Featured/Featured";
import About from "./components/About/About";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
import Appointment from "./components/Appointment/Appointment";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoriesSection />
      <Featured />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <Appointment />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App;