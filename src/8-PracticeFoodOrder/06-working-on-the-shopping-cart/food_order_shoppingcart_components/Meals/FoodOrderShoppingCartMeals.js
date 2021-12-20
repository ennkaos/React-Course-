import { Fragment } from 'react';

import FoodOrderShoppingCartMealsSummary from './FoodOrderShoppingCartMealsSummary';
import FoodOrderShoppingCartAvailableMeals from './FoodOrderShoppingCartAvailableMeals';

const FoodOrderShoppingCartMeals = () => {
  return (
    <Fragment>
      <FoodOrderShoppingCartMealsSummary />
      <FoodOrderShoppingCartAvailableMeals />
    </Fragment>
  );
};

export default FoodOrderShoppingCartMeals;
