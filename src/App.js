import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="appDiv">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} /> */}
      </Routes>
    </div>
  );
}

export default App;
