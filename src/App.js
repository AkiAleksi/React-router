
import './App.css';


import{
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Home from "./home";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'red',
};

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <h1 style={{backgroundColor: "black", color: "white", marginTop: 0, height: 80}}>Welcome to react router</h1> 
    
    <br></br>
   
    <Link to="/home" style={linkStyle}>Home</Link>
    <Link to="/about" style={linkStyle}>About</Link>
    <Link to="/contact" style={linkStyle}>Contact</Link>
   
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
