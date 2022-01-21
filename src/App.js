import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
