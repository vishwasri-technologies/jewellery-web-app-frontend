import React from "react";
import "./Necklace.css";
import image from "../assets/image-222.png"; 

const products = [
  {
    id: 1,
    name: "Gold Necklace",
    price: "$200",
    image: image,
  },
  {
    id: 2,
    name: "Diamond Ring",
    price: "$500",
    image: image,
  },
  {
    id: 3,
    name: "Silver Bracelet",
    price: "$150",
    image: image,
  },
  {
    id: 4,
    name: "Pearl Earrings",
    price: "$120",
    image: image,
  },
  {
    id: 5,
    name: "Platinum Pendant",
    price: "$300",
    image: image,
  },
  {
    id: 6,
    name: "Ruby Ring",
    price: "$450",
    image: image,
  },
  {
    id: 6,
    name: "Ruby Ring",
    price: "$450",
    image: image,
  },
  {
    id: 6,
    name: "Ruby Ring",
    price: "$450",
    image: image,
  },
  {
    id: 6,
    name: "Ruby Ring",
    price: "$450",
    image: image,
  },
  {
    id: 6,
    name: "Ruby Ring",
    price: "$450",
    image: image,
  },
  {
    id: 6,
    name: "Ruby Ring",
    price: "$450",
    image: image,
  },
  {
    id: 6,
    name: "Ruby Ring",
    price: "$450",
    image: image,
  },
  {
    id: 6,
    name: "Ruby Ring",
    price: "$450",
    image: image,
  },
  {
    id: 6,
    name: "Ruby Ring",
    price: "$450",
    image: image,
  },
  {
    id: 6,
    name: "Ruby Ring",
    price: "$450",
    image: image,
  },
  {
    id: 6,
    name: "Ruby Ring",
    price: "$450",
    image: image,
  },
  {
    id: 6,
    name: "Ruby Ring",
    price: "$450",
    image: image,
  },
  {
    id: 6,
    name: "Ruby Ring",
    price: "$450",
    image: image,
  },
  
];

const Necklace = () => {
  return (
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
  );
};

export default Necklace;
