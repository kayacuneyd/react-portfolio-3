import React from "react";
import Double from "./assets/double.png";
import Single from "./assets/single.png";
import Triple from "./assets/triple.png";
import Analytics from "./componenets/Analytics.jsx";
import Cards from "./componenets/Cards.jsx";
import Footer from "./componenets/Footer";
import Hero from "./componenets/Hero.jsx";
import Navbar from "./componenets/Navbar.jsx";
import Newsletter from "./componenets/Newsletter.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Analytics />
      <Newsletter />
        <div className="w-full py-[10rem] px-4 bg-white">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <Cards 
              img={Single} 
              title="Single User" 
              firstFeature="500GB Storage" 
              secondFeature="1 Granted User" 
              thirdFeature="Send up to 2GB" 
              price="149€"
            />
            <Cards 
              img={Double} 
              title="Double User" 
              firstFeature="1TB Storage" 
              secondFeature="2 Granted User" 
              thirdFeature="Send up to 4GB" 
              price="289€"
            />
            <Cards 
              img={Triple} 
              title="2+ User" 
              firstFeature="3TB Storage" 
              secondFeature="Min. 4 Granted User" 
              thirdFeature="Send up to 8GB" 
              price="450€"
            />
          </div>
        </div>
      <Footer/>

      
    </div>
  );
}

export default App;
