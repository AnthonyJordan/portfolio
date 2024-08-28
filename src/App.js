import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="appDiv">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
