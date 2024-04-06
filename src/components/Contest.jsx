import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Matches from "./Matches";
import Footer from "./Footer";
const Contest = () => {
  return (
    <div className="App">
      <Navbar />
      <Matches />
      <Footer />
    </div>
  );
};

export default Contest;
