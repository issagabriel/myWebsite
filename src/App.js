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
      <Routes>
        <Route exact path="/" component={(props) => <Landing {...props} />} />
        <Route
          exact
          path="/about"
          component={(props) => <About {...props} />}
        />
      </Routes>
    </div>
  );
}

export default App;
