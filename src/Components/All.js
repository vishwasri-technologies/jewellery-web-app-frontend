import React from "react";
import Footer from "./Footer";
import pp1 from '../assets/All/pp1.png';
import pp2 from '../assets/All/pp2.png';
import pp3 from '../assets/All/pp3.png';
import pp4 from '../assets/All/pp4.png';
import pp5 from '../assets/All/pp5.png';
import pp6 from '../assets/All/pp6.png';
import pp7 from '../assets/All/pp7.png';
import pp8 from '../assets/All/pp8.png';
import pp9 from '../assets/All/pp9.png';
import pp10 from '../assets/All/pp10.png';
import pp11 from '../assets/All/pp11.png';
import pp12 from '../assets/All/pp12.png';
import pp13 from '../assets/All/pp13.png';
import pp14 from '../assets/All/pp14.png';
import pp15 from '../assets/All/pp15.png';
import pp16 from '../assets/All/pp16.png';
import pp17 from '../assets/All/pp17.png';
import pp18 from '../assets/All/pp18.png';
import pp19 from '../assets/All/pp19.png';
import pp20 from '../assets/All/pp20.png';
import pp21 from '../assets/All/pp21.png';
import "./All.css";

const products =[
  {
    id: 1,
    name: "Choker with Earrings",
    price: "₹1400",
    image: pp1,
  },
  {
    id: 2,
    name: "Multicolour Earrings",
    price: "₹559",
    image: pp2,
  },
  {
    id: 3,
    name: "Jadau Bangle",
    price: "₹559",
    image: pp3,
  },
  {
    id: 4,
    name: "Stone Bangles",
    price: "₹300",
    image: pp4,
  },
  {
    id: 5,
    name: "Short Chain with Pendant",
    price: "₹199",
    image: pp5,
  },
  {
    id: 6,
    name: "Gold & Pearl necklace set",
    price: "₹559",
    image: pp6,
  },
  {
    id: 7,
    name: "Gemstones Ring",
    price: "₹559",
    image: pp7,
  },
  {
    id: 8,
    name: "Stone-Studded Choker",
    price: "₹559",
    image: pp8,
  },
  {
    id: 9,
    name: "Jhumka earrings",
    price: "₹559",
    image: pp9,
  },
  {
    id: 10,
    name: "Bracelet",
    price: "₹559",
    image: pp10,
  },
  {
    id: 11,
    name: "Polki Choker",
    price: "₹559",
    image: pp11,
  },
  {
    id: 12,
    name: "Gold plated Bangle Set",
    price: "₹559",
    image: pp12,
  },
  {
    id: 13,
    name: "Rings",
    price: "₹559",
    image: pp13,
  },
  {
    id: 14,
    name: "Red Kundan Necklace",
    price: "₹559",
    image: pp14,
  },
  {
    id: 15,
    name: "Ramdev Pendant Chain",
    price: "₹559",
    image: pp15,
  },
  {
    id: 16,
    name: "Temple Haramt",
    price: "₹559",
    image: pp16,
  },
  {
    id: 17,
    name: "White kundan Earrings",
    price: "₹559",
    image: pp17,
  },
  {
    id: 18,
    name: "Sofine Oxidised Plated Mirror Necklace Set",
    price: "₹559",
    image: pp18,
  },
  {
    id: 19,
    name: "Gold Plated Bangles",
    price: "₹559",
    image: pp19,
  },
  {
    id: 20,
    name: "Lakshmi Haram",
    price: "₹559",
    image: pp20,
  },
  {
    id: 21,
    name: "Pearl Necklace Set",
    price: "₹559",
    image: pp21,
  },
]
const All = () => {
  return (
    <div>
      <div className="product-container">
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default All;
