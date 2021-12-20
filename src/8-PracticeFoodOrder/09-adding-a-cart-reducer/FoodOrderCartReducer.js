import { useState } from 'react';

import FoodOrderCartReducerHeader from './components/Layout/FoodOrderCartReducerHeader';
import FoodOrderCartReducerMeals from './components/Meals/FoodOrderCartReducerMeals';
import FoodOrderCartReducerCart from './components/Cart/FoodOrderCartReducerCart';
import FoodOrderCartReducerCartProvider from './store/FoodOrderCartReducerCartProvider';

function FoodOrderCartReducer() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <FoodOrderCartReducerCartProvider>
      {cartIsShown && <FoodOrderCartReducerCart onClose={hideCartHandler} />}
      <FoodOrderCartReducerHeader onShowCart={showCartHandler} />
      <main>
        <FoodOrderCartReducerMeals />
      </main>
    </FoodOrderCartReducerCartProvider>
  );
}

export default FoodOrderCartReducer;
