import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Sections/Home/Home";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section5 from "./Sections/Section5";
import Section6 from "./Sections/Section6";
import Section7 from "./Sections/Section7";
import Section8 from "./Sections/Section8";
import Team from "./Sections/team"; 
import Cultural from "./Sections/Cultural"; 
import Register from "./Sections/Register"; 
import Terms from "./Sections/Terms";
import Privacy from "./Sections/Privacy";

import Loader from "./Components/Navbar/Loader/Loader"; 
import 'boxicons/css/boxicons.min.css';
const styles = {
  App: {
    width: "100%",
    minHeight: "100vh",
    backgroundImage: `url("./images/bg5.png")`,
    backgroundPosition: "100% 100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  Layout: {
    width: "100%",
    minHeight: "100vh",
  }
};

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading time (adjust as needed)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout as needed
  }, [location]); // Trigger loading when the location changes

  return (
    <div className="App" style={styles.App}>
      {loading && <Loader isLoading={loading} />}
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div style={styles.Layout}>
            <Home />
            <Section2 />
            <Section3 />
            <Section5 />
            <Section8 />
            <Section7 />
            <Section6 />
          </div>
        } />
        <Route path="/team" element={<Team />} />
        <Route path="/Cultural" element={<Cultural />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Privacy" element={<Privacy />} />
        

      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
