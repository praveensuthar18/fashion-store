import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hats" element={<HatsPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
