import { Fragment } from 'react';

import FoodOrderShoppingCartHeader from './food_order_shoppingcart_components/Layout/FoodOrderShoppingCartHeader';
import FoodOrderShoppingCartMeals from './food_order_shoppingcart_components/Meals/FoodOrderShoppingCartMeals';

function FoodOrderShoppingCart() {
  return (
    <Fragment>
      <FoodOrderShoppingCartHeader />
      <main>
        <FoodOrderShoppingCartMeals />
      </main>
    </Fragment>
  );
}

export default FoodOrderShoppingCart;
