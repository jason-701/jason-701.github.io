import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import BottomBar from "./components/BottomBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div>
    //   <Navbar />
    //   <Homepage />
    //   <About />
    //   <Project />
    //   <Contact />
    //   <BottomBar />
    // </div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
