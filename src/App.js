import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="appDiv">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/projects" component={Projects} /> */}
      </Routes>
    </div>
  );
}

export default App;
