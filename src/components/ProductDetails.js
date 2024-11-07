// components/ProductDetails.js
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  //imported and used to give access to the naviagtion objects
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  // Function for handling  adding to cart and navigating
  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  if (!product) return <p>Loading the products...</p>;

  return (
    <div className="rainbow-border">
      <h1 className="rainbow-text">{product.title}</h1>
      <img src={product.image} alt={product.title} className="large-image" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="rainbow-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
