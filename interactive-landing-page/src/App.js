import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import { ThemeProvider } from "./context/ThemeContext";
import './context/App.css'

const App = () => {
  return ( 
    <ThemeProvider>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/about/*" element= {<About/>}/>
          <Route path="/contact-us" element ={<ContactUs/>}/>
        </Routes>
        </div>
    </ThemeProvider>
   );
}

export default App;