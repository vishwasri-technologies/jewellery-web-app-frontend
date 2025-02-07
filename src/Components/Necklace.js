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
    name: "Temple Nacklace Set",
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
    name: "Cubic Zirconia Nacklace ",
    price: "₹1400",
    image: image4,
  },
  {
    id: 5,
    name: "Gold & Pearl necklace set",
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
    id: 6,
    name: "Antique Nacklace",
    price: "₹1400",
    image: image7,
  },
  {
    id: 6,
    name: "Red Kundan Necklace ",
    price: "₹1400",
    image: image8,
  },
  {
    id: 6,
    name: "Pearl Necklace Set",
    price: "₹1400",
    image: image9,
  },
  {
    id: 6,
    name: "Nacklaces Set",
    price: "₹1400",
    image: image10,
  },
  {
    id: 6,
    name: "Sofine Oxidised Plated Mirror Necklace Set",
    price: "₹1400",
    image: image11,
  },
  {
    id: 6,
    name: "Long Nacklace Set",
    price: "₹1400",
    image: image12,
  },
  {
    id: 6,
    name: "Haram",
    price: "₹1400",
    image: image13,
  },
  {
    id: 6,
    name: "Fancy Jewellery Set ",
    price: "₹1400",
    image: image14,
  },
  {
    id: 6,
    name: "Lakshmi & Peacock Motifs Nacklace Set",
    price: "₹1400",
    image: image15,
  },
  {
    id: 6,
    name: "Temple Haram",
    price: "₹1400",
    image: image16,
  },
  {
    id: 6,
    name: "Lakshmi Nacklace Set",
    price: "₹1400",
    image: image17,
  },
  {
    id: 6,
    name: "Lakshmi Haram",
    price: "₹1400",
    image: image18,
  },
  
];

const Necklace = () => {
  return (
    <div>
    <div className="container">
      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="grid-item">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
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

export default Necklace;
