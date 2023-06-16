import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
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
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
