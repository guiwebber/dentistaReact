import "./App.css";
import React from "react";
import Home from "./pages/home/Home";
import Contato from "./pages/contato/Contato";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/contato" element={<Contato />}>
            Contato
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
