import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./lang/i18n";

import LoadingScreen from "./components/major/LoadingScreen";
import Particle from "./components/minor/Particle";
import Home from "./components/major/Home";
import About from "./components/major/About";
import Skills from "./components/major/Skills";
import Projects from "./components/major/Projects";
import Contact from "./components/major/Contact";
import Footer from "./components/major/Footer";
import StickyNavbar from "./components/major/StickyNavbar";
import HeaderNavbar from "./components/major/HeaderNavbar";

import "./css/index.css";

const container = document.getElementById("root");
const root = createRoot(container!);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />
        <HeaderNavbar />
        <Home />
        <Particle />
        {!isLoading && (
          <>
            <StickyNavbar />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </>
        )}
      </BrowserRouter>
    </I18nextProvider>
  );
};

root.render(<App />);
