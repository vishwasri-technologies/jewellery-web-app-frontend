import React from "react";
import "./Home.css";
import necklace from "../assets/Home/Necklace.png";
import chains from "../assets/Home/Chain.png";

import earrings from "../assets/Home/Earrings.png";
import bangles from "../assets/Home/Bangles.png";

import arrival1 from "../assets/Home/Arrival1.png";
import arrival2 from "../assets/Home/Arrival2.png";
import arrival3 from "../assets/Home/Arrival3.png";

const Home = () => {
  return (
    <div>
      {/* Dazzling Designs Section */}
      <div className="dazzling-container">
        <div className="dazzling-text">
          <h1 className="dazzling-title">Dazzling Designs</h1>
          <p className="dazzling-description">
            Explore our exquisite collection of<br/> handcrafted jewelry,
            where every piece is<br/> meticulously designed to captivate and<br/> shine.
            From timeless classics to<br/> contemporary masterpieces,
            our dazzling<br/> designs are crafted with the finest materials<br/>
            to elevate your elegance.
          </p>
          <button className="dazzling-button">Explore Now</button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <h2 className="section-title">Categories</h2>
        <div className="categories">
          {[{ img: necklace, name: "Necklace" },
            { img: chains, name: "Chains" },
          
            { img: earrings, name: "Ear Rings" },
            { img: bangles, name: "Bangles" },
           ].map((item, index) => (
            <div className="category" key={index}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stunning Arrivals Section */}
      <div className="stunning-arrivals-section">
        <h2 className="section-title">Stunning Arrivals</h2>
        <div className="arrivals">
          {[arrival1, arrival2, arrival3].map((img, index) => (
            <div className="arrival" key={index}>
              <img src={img} alt={`Arrival ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

