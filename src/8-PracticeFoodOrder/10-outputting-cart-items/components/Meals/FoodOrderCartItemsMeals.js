import { Fragment } from 'react';

import FoodOrderCartItemsMealsSummary from './FoodOrderCartItemsMealsSummary';
import FoodOrderCartItemsAvailableMeals from './FoodOrderCartItemsAvailableMeals';

const FoodOrderCartItemsMeals = () => {
  return (
    <Fragment>
      <FoodOrderCartItemsMealsSummary />
      <FoodOrderCartItemsAvailableMeals />
    </Fragment>
  );
};

export default FoodOrderCartItemsMeals;
