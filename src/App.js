import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Landing />
      <About />
    </div>
  );
}

export default App;
