// components/Home.js
import React, { useEffect, useState } from "react";

// Link with router dom allows us to navigate between different pages/routes without reloading the page
import { Link } from "react-router-dom";

//my main styles css that covers all the styling and rainbow goodness
import "../styles.css";

const Home = () => {
  //Products are listed at the home page and using search engine we can find one
  const [products, setProducts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  //fetch fakestoreapi products and images
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter products based on the search keywords
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //After filtering through the items, the results are displayed
  return (
    <div>
      <h1 className="rainbow-text" style={{ marginRight: "40px" }}>
        Products
      </h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {filteredProducts.map((product) => (
        <div className="product-card rainbow-border" key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <Link to={`/product/${product.id}`} className="rainbow-button">
            View Item
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
