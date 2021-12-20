import { useState } from 'react';

import FoodOrderFinishedHeader from './components/Layout/FoodOrderFinishedHeader';
import FoodOrderFinishedMeals from './components/Meals/FoodOrderFinishedMeals';
import FoodOrderFinishedCart from './components/Cart/FoodOrderFinishedCart';
import FoodOrderFinishedCartProvider from './store/FoodOrderFinishedCartProvider';

function FoodOrderFinished() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <FoodOrderFinishedCartProvider>
      {cartIsShown && <FoodOrderFinishedCart onClose={hideCartHandler} />}
      <FoodOrderFinishedHeader onShowCart={showCartHandler} />
      <main>
        <FoodOrderFinishedMeals />
      </main>
    </FoodOrderFinishedCartProvider>
  );
}

export default FoodOrderFinished;
