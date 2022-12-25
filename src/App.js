import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Testimonial from "./Pages/Testimonials/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Home />
     <About />
 <Projects />
  <Testimonial />
      <Contact />
      <Footer/>  
    </>
  );
}

export default App;
