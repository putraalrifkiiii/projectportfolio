import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Section from "./components/HeroSection.jsx";
import About from "./components/About.jsx";
import Tools from "./components/Tools.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import PreLoader from "./components/PreLoader.jsx";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PreLoader />
    <div className="container mx-auto ">
      <div className="px-10 ">
        <Navbar />
        <Section />
        <About />
        <Tools />
        <Contact />
        <App />
      </div>
      <Footer />
    </div>
  </StrictMode>,
);
