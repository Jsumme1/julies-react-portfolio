import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div>
      <Nav />

      <main>
        <Routes>
          {/* home path renders About component*/}
          <Route exact path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/julies-react-portfolio" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
