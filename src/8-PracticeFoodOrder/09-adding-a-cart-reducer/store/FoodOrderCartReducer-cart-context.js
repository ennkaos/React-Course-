import React from 'react';

const FoodOrderCartReducerCartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default FoodOrderCartReducerCartContext;