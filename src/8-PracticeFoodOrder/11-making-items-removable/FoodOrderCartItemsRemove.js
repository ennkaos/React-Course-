import { useState } from 'react';

import FoodOrderCartItemsRemoveHeader from './components/Layout/FoodOrderCartItemsRemoveHeader';
import FoodOrderCartItemsRemoveMeals from './components/Meals/FoodOrderCartItemsRemoveMeals';
import FoodOrderCartItemsRemoveCart from './components/Cart/FoodOrderCartItemsRemoveCart';
import FoodOrderCartItemsRemoveCartProvider from './store/FoodOrderCartItemsRemoveCartProvider';

function FoodOrderCartItemsRemove() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <FoodOrderCartItemsRemoveCartProvider>
      {cartIsShown && <FoodOrderCartItemsRemoveCart onClose={hideCartHandler} />}
      <FoodOrderCartItemsRemoveHeader onShowCart={showCartHandler} />
      <main>
        <FoodOrderCartItemsRemoveMeals />
      </main>
    </FoodOrderCartItemsRemoveCartProvider>
  );
}

export default FoodOrderCartItemsRemove;
