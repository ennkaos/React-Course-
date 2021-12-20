import { Fragment } from 'react';

import FoodOrderCartItemsRemoveMealsSummary from './FoodOrderCartItemsRemoveMealsSummary';
import FoodOrderCartItemsRemoveAvailableMeals from './FoodOrderCartItemsRemoveAvailableMeals';

const FoodOrderCartItemsRemoveMeals = () => {
  return (
    <Fragment>
      <FoodOrderCartItemsRemoveMealsSummary />
      <FoodOrderCartItemsRemoveAvailableMeals />
    </Fragment>
  );
};

export default FoodOrderCartItemsRemoveMeals;
