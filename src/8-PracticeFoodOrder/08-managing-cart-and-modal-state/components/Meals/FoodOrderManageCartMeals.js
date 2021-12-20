import { Fragment } from 'react';

import FoodOrderManageCartMealsSummary from './FoodOrderManageCartMealsSummary';
import FoodOrderManageCartAvailableMeals from './FoodOrderManageCartAvailableMeals';

const FoodOrderManageCartMeals = () => {
  return (
    <Fragment>
      <FoodOrderManageCartMealsSummary />
      <FoodOrderManageCartAvailableMeals />
    </Fragment>
  );
};

export default FoodOrderManageCartMeals;
