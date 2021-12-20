import { Fragment, useState } from 'react';

import FoodOrderManageCartHeader from './components/Layout/FoodOrderManageCartHeader';
import FoodOrderManageCartMeals from './components/Meals/FoodOrderManageCartMeals';
import FoodOrderManageCart from '../08-managing-cart-and-modal-state/components/Cart/FoodOrderManageCart'

function FoodOrderManageCCart() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <FoodOrderManageCart onClose={hideCartHandler} />}
      <FoodOrderManageCartHeader onShowCart={showCartHandler} />
      <main>
        <FoodOrderManageCartMeals />
      </main>
    </Fragment>
  );
}

export default FoodOrderManageCCart;
