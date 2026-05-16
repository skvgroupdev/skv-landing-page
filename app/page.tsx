"use client";

import { useState, useEffect } from "react";
import { content, Language } from "../lib/content";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
// import About from "../components/About";
import Awards from "../components/Awards";
import MyCustomer from "../components/MyCustomer";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";

import Partners from "../components/Partners";

export default function LandingPage() {
  const [lang, setLang] = useState<Language>("la");
  const [scrolled, setScrolled] = useState(false);

  const t = content[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === "en" ? "la" : "en");

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500 selection:text-white scroll-smooth">
      <Navbar t={t} lang={lang} toggleLang={toggleLang} scrolled={scrolled} />
      <Hero t={t} />
      <Partners />
      <Services t={t} />
      {/* <About t={t} /> */}
      <Awards t={t} />
      <MyCustomer t={t} />
      {/* <Contact t={t} /> */}
      <Footer />
    </div>
  );
}