import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <p>HELLO I'M TRYING TO MAKE MY WEBSITE</p>
      </header>
    </div>*/
    <div>
      <Navbar />
      <Homepage />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
