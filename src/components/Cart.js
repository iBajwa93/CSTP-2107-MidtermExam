// components/Cart.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles.css";

// properties featured in the cart, cart items can be deleted and updated

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  // Function to handle navigation to the checkout page
  const goToCheckout = () => {
    navigate("/checkout"); // Navigate to the '/checkout' route
  };

  // Function to handle quantity change
  const handleQuantityChange = (id, quantity) => {
    updateQuantity(id, quantity);
  };

  return (
    <div>
      <h1 className="rainbow-text">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Go buy something</p>
      ) : (
        cartItems.map((item) => (
          <div className="product-card rainbow-border" key={item.id}>
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
            <input
              type="number"
              value={item.quantity || 1}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              min="1"
            />
            {/* capable of deleting based on item ID */}
            <button
              className="rainbow-button"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
      <p className="rainbow-text">
        Total: $
        {cartItems
          .reduce((sum, item) => sum + item.price * item.quantity, 0)
          .toFixed(2)}
      </p>
      {cartItems.length > 0 && (
        <button className="rainbow-button" onClick={goToCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
