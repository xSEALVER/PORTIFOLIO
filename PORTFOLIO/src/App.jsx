import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Sio from "./Pages/Sio";
import Veille from "./Pages/Veille";

import "./index.css";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sio" element={<Sio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/veille" element={<Veille />} />
      </Routes>
    </Router>
  );
}

export default App;
