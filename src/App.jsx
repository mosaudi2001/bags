import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Footer from "./sections/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Footer/>
    </>
  );
}

/* 🔥 مهم عشان animation بين الصفحات */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/footer" element={<Footer/>}   />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}