import React, { useState, useEffect } from "react";

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const handleAddToCart = (e) => {
    const id = e.target.id;
    setCart((prevCart) => {
      return [...prevCart, id];
    });
  };

  useEffect(() => {
    setTotal(cart.length);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, total, cartItems, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
