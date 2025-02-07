import React from "react";
import image500 from "./image500.jpg";
import image501 from "./image501.png";
import image502 from "./image502.png";
import image503 from "./image503.png";
import image504 from "./image504.png";
import image505 from "./image505.png";
import image506 from "./image506.png";
import image507 from "./image507.png";
import image508 from "./image508.png";
import image509 from "./image509.png";
import image510 from "./image510.png";
import image511 from "./image511.png";
import image512 from "./image512.png";
import image513 from "./image513.png";
import image514 from "./image514.png";


const products = [
  { name: "Kundan Chain", price: "₹1,400", image: image500 },
  { name: "Short Chain with Pendant", price: "₹1,400", image: image501 },
  { name: "Antique Long Lakshmi Chain", price: "₹1,400", image: image502 },
  { name: "Classic Gold-Plated Chain", price: "₹1,400", image: image503 },
  { name: "Peacock Motifs", price: "₹1,400", image: image504 },
  { name: "Ramdev Pendant", price: "₹1,400", image: image505 },
  { name: "WhitekundanChain", price: "₹1,400", image: image506 },
  { name: "WhitekundanChain", price: "₹1,400", image: image507 },
  { name: "WhitekundanChain", price: "₹1,400", image: image508 },
  { name: "WhitekundanChain", price: "₹1,400", image: image509 },
  { name: "WhitekundanChain", price: "₹1,400", image: image510 },
  { name: "WhitekundanChain", price: "₹1,400", image: image511 },
  { name: "WhitekundanChain", price: "₹1,400", image: image512 },
  { name: "WhitekundanChain", price: "₹1,400", image: image513 },
  { name: "WhitekundanChain", price: "₹1,400", image: image514 },
];

const Chains = () => (
    <div style={{
      display: "grid", 
      gridTemplateColumns: "repeat(3, 1fr)", 
      gap: "10px", 
      padding: "10px", 
      justifyContent: "center", 
      width: "90%",
      maxWidth: "1200px",
      margin: "auto",
      minHeight: "600px"
    }}>
      {products.map((product, index) => (
        <div key={index} style={{
          width: "100%", 
          height: "100%",
          overflow: "hidden"
        }}>
          <img src={product.image} alt={product.name} style={{
            width: "100%", 
            height: "100%", 
            objectFit: "cover"
          }} />
        </div>
      ))}
    </div>
  );
  

export default Chains;

