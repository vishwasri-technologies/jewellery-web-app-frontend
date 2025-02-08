import React from "react";
import "./Necklace.css";
import image1 from "../assets/necklace/image-1.png"; 
import image2 from "../assets/necklace/image-2.png";
import image3 from "../assets/necklace/image-3.png";
import image4 from "../assets/necklace/image-4.png";
import image5 from "../assets/necklace/image-5.png";
import image6 from "../assets/necklace/image-6.png";
import image7 from "../assets/necklace/image-7.png";
import image8 from "../assets/necklace/image-8.png";
import image9 from "../assets/necklace/image-9.png";
import image10 from "../assets/necklace/image-10.png";
import image11 from "../assets/necklace/image-11.png";
import image12 from "../assets/necklace/image-12.png";
import image13 from "../assets/necklace/image-13.png";
import image14 from "../assets/necklace/image-14.png";
import image15 from "../assets/necklace/image-15.png";
import image16 from "../assets/necklace/image-16.png";
import image17 from "../assets/necklace/image-17.png";
import image18 from "../assets/necklace/image-18.png"; 
import Footer from "./Footer";

const products = [
  {
    id: 1,
    name: "Choker with Earrings",
    price: "₹1400",
    image: image1,
  },
  {
    id: 2,
    name: "Temple Necklace Set",
    price: "₹1400",
    image: image2,
  },
  {
    id: 3,
    name: "Stone-Studded Choker",
    price: "₹1400",
    image: image3,
  },
  {
    id: 4,
    name: "Cubic Zirconia Necklace",
    price: "₹1400",
    image: image4,
  },
  {
    id: 5,
    name: "Gold & Pearl Necklace Set",
    price: "₹1400",
    image: image5,
  },
  {
    id: 6,
    name: "Polki Choker",
    price: "₹1400",
    image: image6,
  },
  {
    id: 7,
    name: "Antique Necklace",
    price: "₹1400",
    image: image7,
  },
  {
    id: 8,
    name: "Red Kundan Necklace",
    price: "₹1400",
    image: image8,
  },
  {
    id: 9,
    name: "Pearl Necklace Set",
    price: "₹1400",
    image: image9,
  },
  {
    id: 10,
    name: "Necklace Set",
    price: "₹1400",
    image: image10,
  },
  {
    id: 11,
    name: "Sofine Oxidised Mirror Necklace Set",
    price: "₹1400",
    image: image11,
  },
  {
    id: 12,
    name: "Long Necklace Set",
    price: "₹1400",
    image: image12,
  },
  {
    id: 13,
    name: "Haram",
    price: "₹1400",
    image: image13,
  },
  {
    id: 14,
    name: "Fancy Jewellery Set",
    price: "₹1400",
    image: image14,
  },
  {
    id: 15,
    name: "Lakshmi & Peacock Motifs Necklace Set",
    price: "₹1400",
    image: image15,
  },
  {
    id: 16,
    name: "Temple Haram",
    price: "₹1400",
    image: image16,
  },
  {
    id: 17,
    name: "Lakshmi Necklace Set",
    price: "₹1400",
    image: image17,
  },
  {
    id: 18,
    name: "Lakshmi Haram",
    price: "₹1400",
    image: image18,
  },
];

const Necklace = () => {
  return (
    <div>
      <div className="necklace-wrapper">
        <div className="necklace-grid">
          {products.map((product) => (
            <div key={product.id} className="necklace-card">
              <img src={product.image} alt={product.name} className="necklace-img" />
              <div className="necklace-info">
                <h3 className="necklace-title">{product.name}</h3>
                <p className="necklace-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Necklace;