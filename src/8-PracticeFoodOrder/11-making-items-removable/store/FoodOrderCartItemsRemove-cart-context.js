import React from 'react';

const FoodOrderCartItemsRemoveCartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default FoodOrderCartItemsRemoveCartContext;