import React from "react";
import Navbar from "../Navbar";
import Footer from "../footer/Footer";
import Carousel from "../Carousel/Carousel";
import Cardsheet from "../Cardsheet/Cardsheet";

function Home() {
  
    
  return (
    <div className="Homepage">
      <Carousel />
      <Cardsheet />
      <Footer />
    </div>
  );
}

export default Home;
