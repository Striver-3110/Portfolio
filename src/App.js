// import logo from "./logo.svg";
import "./App.css";
// import Contact from "./Components/Contact/Contact";
import Typed from "typed.js";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/HeroSection/Hero";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";

function App() {
   useEffect(() => {
     var typeData = new Typed(".role", {
       strings: [
         "Full Stack Developer",
         "Web Developer",
         "Backend Developer",
         "Coder",
       ],
       loop: true,
       typeSpeed: 100,
       backSpeed: 80,
       backDelay: 1000,
     });

     // Cleanup function to destroy Typed instance on unmount
     return () => {
       typeData.destroy();
     };
   }, [1]);
  return (
    <div className="App">
      <div id="wrapper">
        <div class="container">
          <Navbar />
          <Hero />
        </div>
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
