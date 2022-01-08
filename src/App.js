import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";

function App() {
  
  return (
    <div>
      <Nav />

      <main>
        <Routes>
          {/* home path renders About component*/}
          <Route path="/" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<ContactForm />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
