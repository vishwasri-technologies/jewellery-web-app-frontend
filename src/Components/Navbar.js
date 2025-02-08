import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import "./Navbar.css";


const products = [
  { id: 1, name: "Choker with Earrings", price: "₹1400", category: "Necklace"  },
  { id: 2, name: "Temple Nacklace Set", price: "₹1400", category: "Necklace" },
  { id: 3, name: "Stone-Studded Choker", price: "₹1400", category: "Necklace" },
  { id: 4, name: "Cubic Zirconia Nacklace", price: "₹1400", category: "Necklace" },
  { id: 5, name: "Gold & Pearl necklace set", price: "₹1400", category: "Necklace" },
  { id: 6, name: "Polki Choker", price: "₹1400",category: "Necklace"  },
  { id: 7, name: "Antique Nacklace", price: "₹1400",category: "Necklace"  },
  { id: 8, name: "Red Kundan Necklace", price: "₹1400",category: "Necklace"  },
  { id: 9, name: "Pearl Necklace Set", price: "₹1400",category: "Necklace"  },
  { id: 10, name: "Nacklaces Set", price: "₹1400",category: "Necklace"  },
  { id: 11, name: "Sofine Oxidised Plated Mirror Necklace Set", price: "₹1400",category: "Necklace"  },
  { id: 12, name: "Long Nacklace Set", price: "₹1400",category: "Necklace"  },
  { id: 13, name: "Haram", price: "₹1400",category: "Necklace"  },
  { id: 14, name: "Fancy Jewellery Set", price: "₹1400",category: "Necklace"  },
  { id: 15, name: "Lakshmi & Peacock Motifs Nacklace Set", price: "₹1400",category: "Necklace"  },
  { id: 16, name: "Temple Haram", price: "₹1400",category: "Necklace"  },
  { id: 17, name: "Lakshmi Nacklace Set", price: "₹1400",category: "Necklace"  },
  { id: 18, name: "Lakshmi Haram", price: "₹1400",category: "Necklace"  },

  { id: 1, name: "Kundan Chain", price: "₹1400", category: "chains" },
  { id: 2, name: "Short Chain with Pendant", price: "₹1400", category: "chains" },
  { id: 3, name: "Antique Long Lakshmi Chain", price: "₹1400", category: "chains" },
  { id: 4, name: "Classic Gold-Plated Chain", price: "₹1400", category: "chains" },
  { id: 5, name: "Peacock Motifs", price: "₹1400", category: "chains" },
  { id: 6, name: "Ramdev Pendant", price: "₹1400", category: "chains" },
  { id: 7, name: "White Kundan Chain", price: "₹1400", category: "chains" },
  { id: 8, name: "Short Chain with Pendant", price: "₹1400", category: "chains" },
  { id: 9, name: "Antique Lakshmi Gold Chain", price: "₹1400", category: "chains" },
  { id: 10, name: "Rani Haram", price: "₹1400", category: "chains" },
  { id: 11, name: "Black Kundan Chain", price: "₹1400", category: "chains" },
  { id: 12, name: "Ramdev Pendant Chain", price: "₹1400", category: "chains" },
  { id: 13, name: "Short Chain with Pendant", price: "₹1400", category: "chains" },
  { id: 14, name: "Short Chain", price: "₹1400", category: "chains" },
  { id: 15, name: "Short Chain with Pendant", price: "₹1400", category: "chains" },

  
];

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();


  // Handle search input change
  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter products based on input
    if (query.trim()) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  // Handle product selection from dropdown
  const handleSelectProduct = (product) => {
    setSearchQuery(product.name);
    setFilteredProducts([]);
    navigate(`/${product.category.toLowerCase()}?name=${encodeURIComponent(product.name)}`);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const matchedProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      if (matchedProducts.length > 0) {
        const category = matchedProducts[0].category.toLowerCase(); // Ensure category is lowercase
        navigate(`/${category}?name=${encodeURIComponent(searchQuery)}`, { state: { matchedProducts } });
      } else {
        alert("No matching products found.");
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        <div className="logo">
          <Link to="/">SriLaxmiBhagavan</Link>
        </div>

      
        <div className="search-container">
          <input type="text" placeholder="Search jewellery" value={searchQuery}
            onChange={handleSearchInputChange}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}/>
          <FaSearch className="search-icon" onClick={handleSearch}/>

          {/* Dropdown suggestions */}
          {filteredProducts.length > 0 && (
            <ul className="dropdown">
              {filteredProducts.map((product) => (
                <li key={product.id} onClick={() => handleSelectProduct(product)}>
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </div>

      
        <div className="user-menu">
          <Link to="/signup">
            <FaUser className="user-icon" />
            <span>SignUp</span>
          </Link>
        </div>
      </div>

      <div className="nav-links">
        <Link to="/all">All</Link>
        <Link to="/necklace">Necklace</Link>
        <Link to="/chains">Chains</Link>
        <Link to="/earrings-rings">EarRings & Rings</Link>
        <Link to="/bangles">Bangles</Link>
      </div>
    </nav>
  );
};

export default Navbar;
