import React from 'react';

const FoodOrderCartItemsCartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default FoodOrderCartItemsCartContext;