import { useState } from 'react';

import FoodOrderCartItemsHeader from './components/Layout/FoodOrderCartItemsHeader';
import FoodOrderCartItemsMeals from './components/Meals/FoodOrderCartItemsMeals';
import FoodOrderItemsCart from './components/Cart/FoodOrderItemsCart';
import FoodOrderCartItemsCartProvider from './store/FoodOrderCartItemsCartProvider';

function FoodOrderCartItems() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <FoodOrderCartItemsCartProvider>
      {cartIsShown && <FoodOrderItemsCart onClose={hideCartHandler} />}
      <FoodOrderCartItemsHeader onShowCart={showCartHandler} />
      <main>
        <FoodOrderCartItemsMeals />
      </main>
    </FoodOrderCartItemsCartProvider>
  );
}

export default FoodOrderCartItems;
