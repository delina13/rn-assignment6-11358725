import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(item => item.id === product.id);
      if (itemIndex !== -1) {
        // If the item is already in the cart, increase the quantity
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map(item => {
        if (item.id === productId) {
          // Ensure the quantity is not less than 1
          const quantity = newQuantity > 0 ? newQuantity : 1;
          return { ...item, quantity };
        }
        return item;
      });
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
