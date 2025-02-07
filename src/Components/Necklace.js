import React from "react";
import "./Necklace.css";
const products = [
  { id: 1, name: "Gold Necklace", price: "$200", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Diamond Ring", price: "$500", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Silver Bracelet", price: "$150", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Pearl Earrings", price: "$120", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Platinum Pendant", price: "$300", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Ruby Ring", price: "$450", image: "https://via.placeholder.com/150" }
];

const Necklace = () => {
  return (
    <div className="container">
      <h2 className="title">Jewelry Collection</h2>
      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="grid-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Necklace;
