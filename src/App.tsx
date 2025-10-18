import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  // Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";
import Skills from "./components/sections/Skills";
import FloatNav from "./components/layout/FloatNav";
import Footer from "./components/sections/Footer";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <FloatNav/>
          {/* <Navbar /> */}
          <Hero />
        </div>
        <About />
        <Skills/>
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
         <Footer/>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
