// import React from "react";
// import "./Home.css";
// import necklace from "../assets/Home/Necklace.png";
// import chains from "../assets/Home/Chain.png";

// import earrings from "../assets/Home/Earrings.png";
// import bangles from "../assets/Home/Bangles.png";

// import arrival1 from "../assets/Home/Arrival1.png";
// import arrival2 from "../assets/Home/Arrival2.png";
// import arrival3 from "../assets/Home/Arrival3.png";

// const Home = () => {
//   return (
//     <div>
//       {/* Dazzling Designs Section */}
//       <div className="dazzling-container">
//         <div className="dazzling-text">
//           <h1 className="dazzling-title">Dazzling Designs</h1>
//           <p className="dazzling-description">
//             Explore our exquisite collection of handcrafted jewelry,
//             where every piece is meticulously designed to captivate and shine.
//             From timeless classics to contemporary masterpieces,
//             our dazzling designs are crafted with the finest materials
//             to elevate your elegance.
//           </p>
//           <button className="dazzling-button">Explore Now</button>
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="categories-section">
//         <h2 className="section-title">Categories</h2>
//         <div className="categories">
//           {[{ img: necklace, name: "Necklace" },
//             { img: chains, name: "Chains" },
          
//             { img: earrings, name: "Ear Rings" },
//             { img: bangles, name: "Bangles" },
//            ].map((item, index) => (
//             <div className="category" key={index}>
//               <img src={item.img} alt={item.name} />
//               <p>{item.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Stunning Arrivals Section */}
//       <div className="stunning-arrivals-section">
//         <h2 className="section-title">Stunning Arrivals</h2>
//         <div className="arrivals">
//           {[arrival1, arrival2, arrival3].map((img, index) => (
//             <div className="arrival" key={index}>
//               <img src={img} alt={`Arrival ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;




import React from "react";
import "./Home.css";
import necklace from "../assets/Home/Necklace.png";
import chains from "../assets/Home/Chain.png";
import earrings from "../assets/Home/Earrings.png";
import bangles from "../assets/Home/Bangles.png";
import arrival1 from "../assets/Home/Arrival1.png";
import arrival2 from "../assets/Home/Arrival2.png";
import arrival3 from "../assets/Home/Arrival3.png";
import arrival4 from '../assets/Home/Arrival4.png';
import giftImage1 from "../assets/Home/gift-1.png";
import giftImage2 from "../assets/Home/gift-2.png";
import About1 from "../assets/Home/About1.png";
import About2 from "../assets/Home/About2.png";
import customerImage from "../assets/Home/customerImage.png";
import Footer from "./Footer";


const Home = () => {
  return (
    <div>
      {/* Dazzling Designs Section */}
      <div className="dazzling-container">
        <div className="dazzling-text">
          <h1 className="dazzling-title">Dazzling Designs</h1>
          <p className="dazzling-description">
            Explore our exquisite collection of handcrafted jewelry, where every
            piece is meticulously designed to captivate and shine. From timeless
            classics to contemporary masterpieces, our dazzling designs are
            crafted with the finest materials to elevate your elegance.
          </p>
          <button className="dazzling-button">Explore Now</button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <h2 className="section-title">Categories</h2>
        <div className="categories">
          {[
            { img: necklace, name: "Necklace" },
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

      {/* Expression of Love Section (Moved to the End) */}
      <div className="expression-container">
        <h2 className="expression-title">Expression of Love</h2>
        <div className="expression-content">
          <div className="expression-image">
            <img src={arrival4} alt="Rings" />
          </div>
          <div className="expression-text">
            <h3>A symbol of promises made to last</h3>
            <p>
              Celebrate life's meaningful moments with our exquisite rings,
              crafted to symbolize promises that endure. Discover timeless
              designs that capture the essence of commitment and elegance.
            </p>
            <button className="browse-button">Browse Collection</button>
          </div>
        </div>
      </div>
      <div className="gift-section">
      <div className="gift-text">
        <h2>Gift Elegance to Your Loved One</h2>
        <p>
          Celebrate the special moments with timeless jewelry that speaks from
          the heart. Whether it's a dazzling necklace, elegant earrings, or a
          charming bracelet, our exclusive collection has the perfect piece to
          express your love.
        </p>
        <p>
          Make every occasion unforgettable with a gift that lasts forever.
          Explore our handcrafted designs and find the sparkle that matches
          their smile.
        </p>
        <a href="/collection" className="gift-link">
          Discover the Perfect Gift Today!
        </a>
      </div>
      <div className="gift-images">
        <img src={giftImage1} alt="Gift Moment" className="gift-img top-img" />
        <img src={giftImage2} alt="Jewelry Box" className="gift-img bottom-img" />
      </div>
    </div>

  {/* ABOUT US SECTION */}
            
  <div className="about-us-section">
        <h2 className="section-title1">About Us</h2>
        <div className="about-content1">
          <div className="about-images">
            <img src={About1} alt="About Us 1" className="about-image" />
            <img src={About2} alt="About Us 2" className="about-image" />
          </div>
          <div className="about-text">
            <p>
            At SriLaxmiBhagavan, we believe in celebrating <br/>life’s most cherished moments with jewelry that<br/>
             tells your unique story. Our timeless designs are<br/> 
             crafted with precision, blending elegance with<br/> quality to create pieces that last a lifetime.
           </p>
            <p>
            From dazzling rings and necklaces to intricate <br/>
            bracelets and earrings, our collection<br/>   embodies sophistication and grace. 
            Whether<br/> you’re marking a special occasion or simply <br/>indulging in 
            beauty, EternaJewels offers<br/>  unmatched craftsmanship and designs that inspire.
            </p>
          </div>
        </div>
      </div>

{/* CUSTOMER SECTION */}

<div className="happy-customers-section2">
      <h2 className="section-title2">Happy Customers</h2>
      <div className="customer-images">
        <img src={customerImage} alt="Happy Customer" className="customer-image" />
      </div>
     
      </div>
      <>
        <Footer/>
        </>

    </div>
    
  );
};

export default Home;


