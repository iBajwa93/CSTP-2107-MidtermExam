// components/Checkout.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  //The results are then displayed down below for the user to see how close he is to going bankrupt
  //All items and their properties are displayed, the price is totaled for each item

  return (
    <div>
      {cartItems.map((item) => (
        <div>
          <h1 style={{ color: "white" }}>Checkout</h1>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h2 style={{ color: "white" }}>{item.title}</h2>
              <p style={{ color: "white" }}>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      ))}
      <p padding-right="50px" className="rainbow-text">
        Total: ${cartItems.reduce((sum, item) => sum + item.price, 0)}
      </p>

      <br></br>
      <button className="rainbow-button">Finish</button>
    </div>
  );
};

export default Checkout;
