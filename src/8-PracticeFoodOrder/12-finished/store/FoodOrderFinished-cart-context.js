import React from 'react';

const FoodOrderFinishedCartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default FoodOrderFinishedCartContext;